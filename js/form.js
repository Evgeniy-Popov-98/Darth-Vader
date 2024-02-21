const STOREGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.modal-form');
const inputFormUser = document.querySelector('.form-input_name');
const textareaFormUser = document.querySelector('.form-input_email');

feedbackForm.addEventListener('input', addInfoUser);
feedbackForm.addEventListener('submit', showInfoUser);
document.addEventListener('DOMContentLoaded', addValue);

function addValue() {
  const user = localStorage.getItem(STOREGE_KEY);
  const newValue = JSON.parse(user);

  if (!newValue) {
  } else {
    feedbackForm.elements.email.value = newValue.email;
    feedbackForm.elements.user.value = newValue.user;
  }
}

function addInfoUser() {
  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.user.value.trim();

  const user = {
    email,
    message,
  };

  localStorage.setItem(STOREGE_KEY, JSON.stringify(user));
}

function showInfoUser(event) {
  event.preventDefault();

  const user = localStorage.getItem(STOREGE_KEY);

  if (
    !feedbackForm.elements.email.value.trim() ||
    !feedbackForm.elements.user.value.trim()
  ) {
    alert('All form fields must be filled in');
  } else {
    console.log(JSON.parse(user));
    localStorage.removeItem(STOREGE_KEY);
    feedbackForm.reset();
  }
}
