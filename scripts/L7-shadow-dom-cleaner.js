// ==UserScript==
// @name         OMNI-L7: Deep Shadow DOM & Idle Ghosting
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
  const log = (msg, data) => DEBUG && console.log('%c[L7-Shadow]', 'color:#9933ff;font-weight:bold', msg, data || '');

  const config = {
    forceOpenShadow: true,
    idleState: 'active',
    screenState: 'locked',
    alwaysVisible: true
  };

  const omniOverwrite = (obj, prop, value) => {
    try {
      Object.defineProperty(obj, prop, {
        get: () => value,
        configurable: true,
        enumerable: true
      });
    } catch (e) {}
  };

  // Reactive shadow DOM opening
  const originalAttachShadow = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function(init) {
    if (config.forceOpenShadow && init && init.mode === 'closed') {
      init.mode = 'open';
    }
    const shadow = originalAttachShadow.apply(this, arguments);
    window.requestIdleCallback?.(() => {
      if (typeof applyL3Reaper === 'function') {
        applyL3Reaper(shadow);
      }
    });
    return shadow;
  };
  log('Shadow DOM forced open');

  // Idle detector ghosting
  if ('IdleDetector' in window) {
    window.IdleDetector = function() {
      return {
        start: () => Promise.resolve(),
        addEventListener: () => {},
        removeEventListener: () => {},
        state: { userState: config.idleState, screenState: config.screenState }
      };
    };
    window.IdleDetector.requestPermission = () => Promise.resolve('granted');
    log('IdleDetector spoofed');
  }

  // Page visibility
  if (config.alwaysVisible) {
    omniOverwrite(document, 'visibilityState', 'visible');
    omniOverwrite(document, 'hidden', false);
    log('Page visibility masked');
  }

  log('L7 Deep Shadow DOM & Idle Ghosting initialized');
})();