// ==UserScript==
// @name         OMNI-L1200: Virus Map
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
  const log = (msg, data) => DEBUG && console.log('%c[L1200-Virus]', 'color:#ff0099;font-weight:bold', msg, data || '');

  const dangerousExtensions = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|jar|apk|app|dmg|iso)$/i;
  const dangerousProtocols = /^(javascript:|data:text\/html)/i;

  const isPathDangerous = (url) => {
    if (!url || typeof url !== 'string') return false;
    return dangerousProtocols.test(url) || dangerousExtensions.test(url.split('?')[0]);
  };

  // Hook clicks
  window.addEventListener('click', (e) => {
    const trigger = e.target.closest('a') || e.target.closest('[data-href]');
    
    if (trigger) {
      const url = trigger.href || trigger.getAttribute('data-href');
      
      if (isPathDangerous(url)) {
        log('BLOCKED dangerous navigation:', url);
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }
    }
  }, { capture: true, passive: false });
  log('Click trap set');

  // Hook window.open
  const originalOpen = window.open;
  window.open = function(url, ...args) {
    if (isPathDangerous(url)) {
      log('BLOCKED window.open():', url);
      return null;
    }
    return originalOpen.apply(this, args);
  };
  log('window.open() hooked');

  log('L1200 Virus Map initialized');
})();