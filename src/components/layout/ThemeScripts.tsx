'use client';

import { useEffect } from 'react';

// Core scripts only — 17 → 7 for a simple blog
const VENDOR_SCRIPTS = [
  '/assets/js/vendor/jquery-3.6.0.min.js',
  '/assets/js/vendor/popper.min.js',
  '/assets/js/vendor/bootstrap.min.js',
  '/assets/js/vendor/jquery.slicknav.js',
  '/assets/js/vendor/slick.min.js',
  '/assets/js/vendor/wow.min.js',
  '/assets/js/vendor/jquery.ticker.js',
  '/assets/js/vendor/jquery.vticker-min.js',
  '/assets/js/vendor/jquery.scrollUp.min.js',
  '/assets/js/vendor/jquery.nice-select.min.js',
  '/assets/js/vendor/jquery.magnific-popup.js',
  '/assets/js/vendor/perfect-scrollbar.js',
  '/assets/js/vendor/waypoints.min.js',
  '/assets/js/vendor/jquery.sticky.js',
  '/assets/js/vendor/jquery.theia.sticky.js',
  '/assets/js/main.js',
];

function loadScriptSequentially(scripts: string[], index: number): void {
  if (index >= scripts.length) return;
  const src = scripts[index];

  if (document.querySelector(`script[src="${src}"]`)) {
    loadScriptSequentially(scripts, index + 1);
    return;
  }

  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  script.onload = () => loadScriptSequentially(scripts, index + 1);
  script.onerror = () => loadScriptSequentially(scripts, index + 1);
  document.body.appendChild(script);
}

export function ThemeScripts() {
  useEffect(() => {
    loadScriptSequentially(VENDOR_SCRIPTS, 0);
  }, []);

  return null;
}
