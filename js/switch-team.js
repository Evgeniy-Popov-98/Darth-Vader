'use strick';
const topicMain = document.querySelector('body');
const switchButton = document.querySelector('.button-war');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  topicMain.classList.add('dark');
} else {
  topicMain.classList.add('light');
}

switchButton.addEventListener('click', switchTeam);

function switchTeam() {
  if (topicMain.classList.value === 'dark') {
    topicMain.classList.remove('dark');
    topicMain.classList.add('light');
  } else {
    topicMain.classList.remove('light');
    topicMain.classList.add('dark');
  }
}
