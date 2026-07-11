// ==UserScript==
// @name         OMNI-L150: Eval Blocker
// @namespace    https://github.com/
// @version      v1.0.0
// @author       Optimized Split
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  const DEBUG = true;
  const log = (msg, data) => DEBUG && console.log('%c[L150-Blocker]', 'color:#ff0000;font-weight:bold', msg, data || '');

  const MAX_SIZE = 150000;

  const createGuard = (originalFn, name) => {
    return function(code) {
      if (typeof code === 'string' && code.length > MAX_SIZE) {
        log(`BLOCKED: ${name} payload ${code.length} bytes`, 'DANGEROUS');
        return null;
      }
      return originalFn.apply(window, arguments);
    };
  };

  // Block eval
  window.eval = createGuard(window.eval, 'eval');
  log('eval() blocked');

  // Block Function constructor
  const originalFunction = window.Function;
  window.Function = createGuard(originalFunction, 'Function');
  window.Function.prototype = originalFunction.prototype;
  log('Function() blocked');

  // Block setTimeout/setInterval with code
  const wrapTimer = (originalTimer, name) => {
    return function(handler, timeout, ...args) {
      if (typeof handler === 'string' && handler.length > MAX_SIZE) {
        log(`BLOCKED: ${name} string payload ${handler.length} bytes`);
        return 0;
      }
      return originalTimer.call(window, handler, timeout, ...args);
    };
  };

  window.setTimeout = wrapTimer(window.setTimeout, 'setTimeout');
  window.setInterval = wrapTimer(window.setInterval, 'setInterval');
  log('Timer injection blocked');

  // DOM observer for inline scripts
  const obs = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.tagName === 'SCRIPT') {
          const content = node.textContent || '';
          if (content.length > MAX_SIZE || (content.includes('eval(') && content.length > 50000)) {
            node.type = 'text/plain';
            node.remove();
            log(`BLOCKED: Script injection ${content.length} bytes`);
          }
        }
      });
    });
  });

  obs.observe(document.documentElement, { childList: true, subtree: true });
  log('L150 Eval Blocker initialized');
})();