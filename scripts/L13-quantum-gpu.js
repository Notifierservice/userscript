// ==UserScript==
// @name         OMNI-L13: Quantum GPU Masking
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
  const log = (msg, data) => DEBUG && console.log('%c[L13-Quantum]', 'color:#00ff99;font-weight:bold', msg, data || '');

  const config = {
    pointerNoise: 0.0001,
    ratio: 2,
    depth: 24,
    gpuMask: {
      0x9245: 'Intel Inc.',
      0x9246: 'Intel(R) Iris(TM) Graphics 6100',
      37445: 'Intel Inc.',
      37446: 'Intel(R) Iris(TM) Graphics 6100',
      0x8DFA: 30,
      0x8DF8: 1024
    }
  };

  // Mouse coordinate noise
  const wrapMouseEvent = (Proto) => {
    if (!Proto) return;
    ['screenX', 'screenY', 'clientX', 'clientY'].forEach(prop => {
      const desc = Object.getOwnPropertyDescriptor(Proto, prop);
      if (!desc?.get) return;
      
      Object.defineProperty(Proto, prop, {
        get: function() {
          const val = desc.get.call(this);
          return val + (Math.random() * config.pointerNoise);
        },
        configurable: true
      });
    });
  };

  wrapMouseEvent(MouseEvent.prototype);
  if (window.PointerEvent) wrapMouseEvent(PointerEvent.prototype);
  log('Mouse coordinates jittered');

  // WebGL GPU spoofing
  const maskWebGL = (proto) => {
    if (!proto) return;
    const originalGetParameter = proto.getParameter;
    
    proto.getParameter = function(p) {
      if (config.gpuMask[p] !== undefined) return config.gpuMask[p];
      return originalGetParameter.apply(this, arguments);
    };
  };

  maskWebGL(WebGLRenderingContext.prototype);
  if (window.WebGL2RenderingContext) maskWebGL(WebGL2RenderingContext.prototype);
  log('WebGL GPU spoofed');

  // Display properties
  Object.defineProperty(window, 'devicePixelRatio', {
    get: () => config.ratio,
    configurable: true
  });
  if (window.screen) {
    Object.defineProperty(window.screen, 'colorDepth', {
      get: () => config.depth,
      configurable: true
    });
    Object.defineProperty(window.screen, 'pixelDepth', {
      get: () => config.depth,
      configurable: true
    });
  }
  log('Display properties masked');

  log('L13 Quantum GPU Masking initialized');
})();