const showLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('hidden');
  }
};

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  }
};

export { showLoader, hideLoader };