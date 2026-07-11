// ==UserScript==
// @name         OMNI-L3: Ad Reaper
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
  const log = (msg, data) => DEBUG && console.log('%c[L3-Reaper]', 'color:#ff4500;font-weight:bold', msg, data || '');

  const config = {
    cssBlock: '[class*="ad-"][class*="-container"], [id*="ad-banner"], .adsbygoogle, [class*="sponsored-content"]',
    adPattern: '[class*="ad-"], [id*="ad-"], [class*="banner"]',
    trapPattern: '[class*="overlay"], [class*="popup"]',
    badWords: ['adblock', 'cookies', 'subscribe', 'ads'],
    idleTimeout: 500,
    ghostCleanDelay: 3000
  };

  // CSS suppression
  const style = document.createElement('style');
  style.textContent = `${config.cssBlock} { display: none !important; visibility: hidden !important; opacity: 0 !important; }`;
  document.documentElement.appendChild(style);
  log('CSS ad blocking applied');

  // Mutation observer
  const reaper = new MutationObserver((mutations) => {
    window.requestIdleCallback?.(() => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          const isAd = node.matches(config.adPattern);
          const isTrap = node.matches(config.trapPattern) && 
                        config.badWords.some(w => node.innerText?.toLowerCase().includes(w));
          
          if (isAd || isTrap) {
            node.style.setProperty('display', 'none', 'important');
            node.setAttribute('data-reaped', 'true');
            log('Ad element removed');
          }
        });
      });
    }, { timeout: config.idleTimeout }) || mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType === 1 && (node.matches(config.adPattern) || node.matches(config.trapPattern))) {
          node.style.setProperty('display', 'none', 'important');
        }
      });
    });
  });

  reaper.observe(document.documentElement, { childList: true, subtree: true });

  // Periodic cleanup
  setTimeout(() => {
    document.querySelectorAll('div[style*="z-index: 2147483647"]').forEach(trap => {
      if (trap.innerText?.length < 500) trap.remove();
    });
  }, config.ghostCleanDelay);

  log('L3 Ad Reaper initialized');
})();