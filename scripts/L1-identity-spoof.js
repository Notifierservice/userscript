// ==UserScript==
// @name         OMNI-L1: Identity Spoof
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
  const log = (msg, data) => DEBUG && console.log('%c[L1-Identity]', 'color:#00ff00;font-weight:bold', msg, data || '');

  const config = {
    platform: 'MacIntel',
    vendor: 'Google Inc.',
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    platformName: 'macOS',
    platformVersion: '14.4.1',
    brands: [
      { brand: 'Not A(A_Brand', version: '99' },
      { brand: 'Google Chrome', version: '124' },
      { brand: 'Chromium', version: '124' }
    ]
  };

  const omniOverwrite = (obj, prop, value) => {
    try {
      Object.defineProperty(obj, prop, {
        get: () => value,
        configurable: true,
        enumerable: true
      });
      log(`Spoofed ${prop}`);
    } catch (e) {
      log(`Failed to spoof ${prop}`, e.message);
    }
  };

  // Apply identity masking
  omniOverwrite(navigator, 'platform', config.platform);
  omniOverwrite(navigator, 'vendor', config.vendor);
  omniOverwrite(navigator, 'userAgent', config.ua);
  omniOverwrite(navigator, 'webdriver', false);

  if (navigator.userAgentData) {
    omniOverwrite(navigator, 'userAgentData', {
      getHighEntropyValues: (hints) => Promise.resolve({
        architecture: 'x86',
        bitness: '64',
        model: '',
        platform: config.platformName,
        platformVersion: config.platformVersion,
        uaFullVersion: config.ua
      }),
      brands: config.brands,
      mobile: false,
      platform: config.platformName
    });
  }

  log('L1 Identity Spoof initialized');
})();