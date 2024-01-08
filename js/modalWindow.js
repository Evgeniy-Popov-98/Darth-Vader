document.addEventListener('DOMContentLoaded', function () {
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modalSection = document.querySelector('.modal-section');
  let isOpen = false;

  function openModal() {
    isOpen = !isOpen;
    if (isOpen) {
      modalSection.style.opacity = '1';
      modalSection.style.visibility = 'visible';
      modalSection.style.pointerEvents = 'auto';
      console.log('open');
    } else {
      modalSection.style.opacity = '0';
      modalSection.style.visibility = 'hidden';
      modalSection.style.pointerEvents = 'none';
      console.log('no-open');
    }
  }

  function closeModal() {
    isOpen = false;
    modalSection.style.opacity = '0';
    modalSection.style.visibility = 'hidden';
    modalSection.style.pointerEvents = 'none';
    console.log('close');
  }
  openModal.addEventListener('click', openModal);
  closeModal.addEventListener('click', closeModal);
});

// function modal() {
//   isOpen = true;
//   if (isOpen) {
//     modalSection.style.opacity = '1';
//     modalSection.style.visibility = 'visible';
//     modalSection.style.pointerEvents = 'auto';
//     console.log('open');
//   } else {
//     console.log('no-open');
//   }
// }

// const modalSection = document.querySelector('.hero-left-content-link');

// console.log('Helo');

// modalSection.addEventListener('click', modal);
