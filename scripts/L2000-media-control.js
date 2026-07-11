// ==UserScript==
// @name         OMNI-L2000: Media Control
// @namespace    https://github.com/
// @version      v1.0.0
// @author       Optimized Split
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';

  const DEBUG = true;
  const log = (msg, data) => DEBUG && console.log('%c[L2000-Media]', 'color:#ff6600;font-weight:bold', msg, data || '');

  const config = {
    turboRate: 16,
    skipOffset: 0.3,
    volumeStep: 0.05,
    cleanupInterval: 1000
  };

  const isYouTube = window.location.hostname.includes('youtube.com');
  const AD_SELECTORS = '.ad-interrupting, .ad-showing, .video-ads, .ytp-ad-player-overlay';
  const SKIP_SELECTORS = '.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button-slot';

  const turboSkip = (video) => {
    if (!video) return;

    const isAd = document.querySelector(AD_SELECTORS);
    const skipBtn = document.querySelector(SKIP_SELECTORS);

    if (isAd) {
      video.muted = true;
      video.playbackRate = config.turboRate;
      
      if (isFinite(video.duration) && video.currentTime < video.duration - 0.5) {
        video.currentTime = video.duration - config.skipOffset;
      }

      if (skipBtn) {
        skipBtn.click();
        log('Ad skipped');
      }
    } else {
      if (video.playbackRate > 2) video.playbackRate = 1;
    }

    document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-image-overlay').forEach(el => el.remove());
  };

  const initObserver = () => {
    const video = document.querySelector('video');
    if (!video) return;

    video.addEventListener('timeupdate', () => turboSkip(video));
    
    const observer = new MutationObserver(() => turboSkip(video));
    observer.observe(document.body, { childList: true, subtree: true });
    log('Video observer initialized');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
  } else {
    initObserver();
  }

  if (isYouTube) {
    window.addEventListener('yt-navigate-finish', initObserver);
  }

  // Volume control
  document.addEventListener('wheel', e => {
    const video = document.querySelector('video');
    if (video && (video.contains(e.target) || isYouTube)) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -config.volumeStep : config.volumeStep;
      video.volume = Math.max(0, Math.min(1, video.volume + delta));
    }
  }, { passive: false });

  log('L2000 Media Control initialized');
})();