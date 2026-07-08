(() => {
  if (!document.querySelector('script[data-stt-new-products]')) {
    const script = document.createElement('script');
    script.src = 'assets/js/new-products.js?v=20260709-1';
    script.defer = true;
    script.dataset.sttNewProducts = 'true';
    document.head.appendChild(script);
  }
  if (!document.querySelector('script[data-stt-coconut-content]')) {
    const script = document.createElement('script');
    script.src = 'assets/js/coconut-product-content.js?v=20260709-1';
    script.defer = true;
    script.dataset.sttCoconutContent = 'true';
    document.head.appendChild(script);
  }
})();