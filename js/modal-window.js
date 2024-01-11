'use strick';

document.addEventListener('DOMContentLoaded', function () {
  const openWindowModal = document.getElementById('openModal');
  const closeWindowModal = document.getElementById('closeModal');
  const modalSection = document.querySelector('.modal-section');
  let isOpen = false;

  function openModal() {
    isOpen = !isOpen;
    if (isOpen) {
      modalSection.style.opacity = '1';
      modalSection.style.visibility = 'visible';
      modalSection.style.pointerEvents = 'auto';
    } else {
      modalSection.style.opacity = '0';
      modalSection.style.visibility = 'hidden';
      modalSection.style.pointerEvents = 'none';
    }
    document.addEventListener('keydown', hiddenModal);
  }

  function closeModal() {
    isOpen = false;
    modalSection.style.opacity = '0';
    modalSection.style.visibility = 'hidden';
    modalSection.style.pointerEvents = 'none';
  }

  function hiddenModal(e) {
    console.log(e.code);
    if (e.code === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', hiddenModal);
    }
  }

  function clickCloseModal(e) {
    if (e.target.nodeName === 'SECTION') {
      closeModal();
    }
  }

  openWindowModal.addEventListener('click', openModal);
  closeWindowModal.addEventListener('click', closeModal);
  modalSection.addEventListener('click', clickCloseModal);
});

/*========================================================================================*/

// const modalWindow = document.querySelector('.modal-section');
// const openWindowModal = document.querySelector('#openModal');
// const closeWindowModal = document.querySelector('#closeModal');

// // isOpen != isOpen;

// function openWindow() {
//   const isOpen = true;
//   if (isOpen) {
//     modalWindow.style.opacity = '1';
//     modalWindow.style.visibility = 'visible';
//     modalWindow.style.pointerEvents = 'auto';
//   }
// }

// function closeWindiw() {
//   modalWindow.style.opacity = '0';
//   modalWindow.style.visibility = 'hidden';
//   modalWindow.style.pointerEvents = 'none';
// }

// openWindowModal.addEventListener('click', openWindow);
// closeWindowModal.addEventListener('click', closeWindiw);
