'use strick';

document.addEventListener('DOMContentLoaded', function () {
  const openFormModal = document.getElementById('openModal');
  const closeFormModal = document.getElementById('closeFormModal');
  const modalSection = document.querySelector('.modal-form-window');
  const formButton = document.querySelector('.modal-form');

  const modalInfoClose = document.getElementById('closeInfoModal');
  const modalInfoSection = document.querySelector('.modal-info-modal');
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
  function closeInfoModal() {
    modalInfoSection.style.opacity = '0';
    modalInfoSection.style.visibility = 'hidden';
    modalInfoSection.style.pointerEvents = 'none';
  }

  function hiddenModal(e) {
    if (e.code === 'Escape') {
      closeModal();
      closeInfoModal();
      document.removeEventListener('keydown', hiddenModal);
    }
  }

  function clickCloseModal(e) {
    if (e.target.nodeName === 'SECTION') {
      closeModal();
      closeInfoModal();
    }
  }

  function openInfoModal(e) {
    e.preventDefault();
    closeModal();
    modalInfoSection.style.opacity = '1';
    modalInfoSection.style.visibility = 'visible';
    modalInfoSection.style.pointerEvents = 'auto';

    modalInfoClose.addEventListener('click', closeInfoModal);
    document.addEventListener('keydown', hiddenModal);
    modalInfoSection.addEventListener('click', clickCloseModal);
  }

  openFormModal.addEventListener('click', openModal);
  closeFormModal.addEventListener('click', closeModal);
  modalSection.addEventListener('click', clickCloseModal);
  formButton.addEventListener('submit', openInfoModal);
});
