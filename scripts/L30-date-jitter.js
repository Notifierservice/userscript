// ==UserScript==
// @name         OMNI-L30: Date & Time Entropy
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
  const log = (msg, data) => DEBUG && console.log('%c[L30-Zenith]', 'color:#ffff00;font-weight:bold', msg, data || '');

  const config = {
    dateJitterMax: 2,
    perfPrecision: 10,
    nanoNoise: 0.001
  };

  const OriginalDate = window.Date;
  const jitter = () => Math.random() * config.dateJitterMax;

  const DateProxy = new Proxy(OriginalDate, {
    construct(target, args) {
      const d = new target(...args);
      if (args.length === 0) {
        d.setMilliseconds(d.getMilliseconds() + jitter());
      }
      return d;
    },
    apply: (target, thisArg, args) => target.apply(thisArg, args)
  });

  DateProxy.now = function() {
    return OriginalDate.now() + jitter();
  };

  DateProxy.prototype = OriginalDate.prototype;
  window.Date = DateProxy;
  log('Date.now() jittered');

  // Performance.now() precision degradation
  if (window.performance?.now) {
    const orgPerfNow = performance.now.bind(performance);
    performance.now = function() {
      const t = orgPerfNow();
      const p = config.perfPrecision;
      return Math.floor(t * p) / p + (Math.random() * config.nanoNoise);
    };
    log('performance.now() degraded to 100μs precision');
  }

  log('L30 Date & Time Entropy initialized');
})();