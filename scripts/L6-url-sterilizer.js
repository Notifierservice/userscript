// ==UserScript==
// @name         OMNI-L6: URL Sterilizer
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
  const log = (msg, data) => DEBUG && console.log('%c[L6-Sterilizer]', 'color:#0099ff;font-weight:bold', msg, data || '');

  const trashParams = ['utm_', 'fbclid', 'gclid', 'yclid', '_ga', '_gl', 'msclkid', 'aff_id', 'click_id', 'ref'];

  const sterilize = (urlStr) => {
    try {
      const url = new URL(urlStr);
      let changed = false;
      const params = [...url.searchParams.keys()];
      
      params.forEach(p => {
        if (trashParams.some(trash => p.startsWith(trash))) {
          url.searchParams.delete(p);
          changed = true;
        }
      });
      
      return changed ? url.toString() : urlStr;
    } catch (e) {
      return urlStr;
    }
  };

  // Clean current URL
  const currentUrl = window.location.href;
  const cleanUrl = sterilize(currentUrl);
  if (cleanUrl !== currentUrl) {
    window.history.replaceState({}, document.title, cleanUrl);
    log('Current URL sterilized');
  }

  // Hook History API
  const wrapHistory = (method) => {
    const original = window.history[method];
    window.history[method] = function(state, title, url) {
      const sterilizedUrl = url ? sterilize(new URL(url, document.baseURI).href) : url;
      return original.apply(this, [state, title, sterilizedUrl]);
    };
  };

  wrapHistory('pushState');
  wrapHistory('replaceState');
  log('L6 URL Sterilizer initialized');
})();