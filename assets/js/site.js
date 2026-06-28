(() => {
  const dialog = document.querySelector('.contact-dialog');
  const openButton = document.querySelector('[data-open-contact]');
  const closeButton = document.querySelector('[data-close-contact]');

  if (!dialog || !openButton || !closeButton) return;

  openButton.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  });

  const closeDialog = () => dialog.close();

  closeButton.addEventListener('click', closeDialog);

  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (clickedOutside) closeDialog();
  });
})();
