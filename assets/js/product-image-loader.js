(() => {
  const productPrefix = 'assets/images/products/';
  const endpoint = 'assets/images/products/image.php?file=';

  function convert(img) {
    const raw = img.getAttribute('src') || '';
    if (!raw.includes(productPrefix) || raw.includes('image.php?file=')) return;
    const file = raw.split('/').pop().split('?')[0];
    img.src = endpoint + encodeURIComponent(file) + '&v=20260708-4';
  }

  function scan(root = document) {
    if (root.tagName === 'IMG') convert(root);
    root.querySelectorAll?.('img').forEach(convert);
  }

  function start() {
    scan();
    new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node.nodeType === 1) scan(node);
      }));
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
