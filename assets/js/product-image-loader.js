(() => {
  const productPrefix = 'assets/images/products/';
  const endpoint = 'assets/images/products/image.php?file=';

  function applyFallback(img) {
    const src = img.getAttribute('src') || '';
    if (!src.includes(productPrefix) || src.includes('image.php?file=')) return;

    const name = src.split('/').pop().split('?')[0];
    const fallback = endpoint + encodeURIComponent(name);

    img.addEventListener('error', () => {
      if (img.src.includes('image.php?file=')) return;
      img.src = fallback;
    }, { once: true });

    if (img.complete && img.naturalWidth === 0) {
      img.src = fallback;
    }
  }

  function refresh(root = document) {
    if (root.tagName === 'IMG') applyFallback(root);
    root.querySelectorAll?.('img').forEach(applyFallback);
  }

  function init() {
    refresh();
    new MutationObserver(mutations => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) refresh(node);
        });
      }
    }).observe(document.documentElement, { subtree: true, childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
