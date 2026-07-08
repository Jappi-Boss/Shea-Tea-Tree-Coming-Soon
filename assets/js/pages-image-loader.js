(() => {
  const bundleUrl = 'assets/images/products/product-images.tgz.b64';
  const productPrefix = 'assets/images/products/';
  const objectUrls = new Map();

  function readString(bytes, start, length) {
    return new TextDecoder().decode(bytes.subarray(start, start + length)).replace(/\0.*$/, '');
  }

  function parseOctal(bytes, start, length) {
    const value = readString(bytes, start, length).trim();
    return value ? parseInt(value, 8) : 0;
  }

  function parseTar(bytes) {
    const files = new Map();
    let offset = 0;
    while (offset + 512 <= bytes.length) {
      const name = readString(bytes, offset, 100);
      if (!name) break;
      const size = parseOctal(bytes, offset + 124, 12);
      const type = String.fromCharCode(bytes[offset + 156] || 48);
      const dataStart = offset + 512;
      if (type === '0' || type === '\0') {
        const basename = name.split('/').pop();
        files.set(basename, bytes.slice(dataStart, dataStart + size));
      }
      offset = dataStart + Math.ceil(size / 512) * 512;
    }
    return files;
  }

  async function loadBundle() {
    const response = await fetch(bundleUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Unable to load image bundle: ${response.status}`);
    const base64 = (await response.text()).replace(/\s+/g, '');
    const binary = atob(base64);
    const compressed = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) compressed[i] = binary.charCodeAt(i);

    if (!('DecompressionStream' in window)) {
      throw new Error('This browser does not support DecompressionStream.');
    }

    const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'));
    const tarBytes = new Uint8Array(await new Response(stream).arrayBuffer());
    const files = parseTar(tarBytes);

    files.forEach((bytes, name) => {
      const type = name.endsWith('.webp') ? 'image/webp' : name.endsWith('.png') ? 'image/png' : 'image/jpeg';
      objectUrls.set(name, URL.createObjectURL(new Blob([bytes], { type })));
    });
  }

  function replaceImage(img) {
    const src = img.getAttribute('src') || '';
    if (!src.includes(productPrefix)) return;
    const name = src.split('/').pop().split('?')[0];
    const replacement = objectUrls.get(name);
    if (replacement && src !== replacement) img.src = replacement;
  }

  function refresh(root = document) {
    root.querySelectorAll?.('img').forEach(replaceImage);
  }

  async function init() {
    try {
      await loadBundle();
      refresh();
      new MutationObserver(mutations => {
        for (const mutation of mutations) {
          if (mutation.type === 'attributes' && mutation.target.tagName === 'IMG') replaceImage(mutation.target);
          mutation.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.tagName === 'IMG') replaceImage(node);
            refresh(node);
          });
        }
      }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['src'] });
    } catch (error) {
      console.error('GitHub Pages preview image loader:', error);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
