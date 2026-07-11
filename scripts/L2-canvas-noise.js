// ==UserScript==
// @name         OMNI-L2: Canvas & WebRTC Noise
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
  const log = (msg, data) => DEBUG && console.log('%c[L2-Noise]', 'color:#00ffff;font-weight:bold', msg, data || '');

  const config = {
    canvasNoise: true,
    pixelCount: 4,
    ghostWebRTC: true,
    blockDevices: true
  };

  // Canvas pixel noise
  if (config.canvasNoise) {
    const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h) {
      const imageData = originalGetImageData.apply(this, arguments);
      const isSmall = w < 16 || h < 16;

      if (!isSmall) {
        for (let i = 0; i < config.pixelCount; i++) {
          const offset = Math.floor(Math.random() * (imageData.data.length / 4)) * 4;
          imageData.data[offset] += (Math.random() > 0.5 ? 1 : -1);
        }
      }
      return imageData;
    };
    log('Canvas noise enabled');
  }

  // WebRTC ghosting
  if (window.RTCPeerConnection && config.ghostWebRTC) {
    const RealRTC = window.RTCPeerConnection;
    window.RTCPeerConnection = function(config) {
      if (config?.iceServers) config.iceServers = [];
      const pc = new RealRTC(config);
      pc.addIceCandidate = () => Promise.resolve();
      return pc;
    };
    window.RTCPeerConnection.prototype = RealRTC.prototype;
    log('WebRTC ghosting enabled');
  }

  // Block device enumeration
  if (navigator.mediaDevices && config.blockDevices) {
    navigator.mediaDevices.enumerateDevices = () => Promise.resolve([]);
    log('Device enumeration blocked');
  }

  log('L2 Canvas & WebRTC Noise initialized');
})();