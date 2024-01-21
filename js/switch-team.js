'use strick';
const teamMain = document.querySelector('body');
console.log(teamMain);
const switchButton = document.querySelector('.button-war');
const logoIcon = document.querySelectorAll('.logo');
const socialIcons = document.querySelectorAll('.social-icons');
const achievementIcons = document.querySelectorAll('#achievement-icons');
const footerIcon = document.querySelectorAll('.footer-img');
switchButton.addEventListener('click', switchTeam);

function switchTeam(event) {
  if (teamMain.classList.contains('dark')) {
    teamMain.classList.replace('dark', 'light');
  } else {
    teamMain.classList.replace('light', 'dark');
  }

  for (const item of logoIcon) {
    if (item.classList.contains('visually-hidden')) {
      item.classList.replace('visually-hidden', 'is-open');
    } else if (item.classList.contains('is-open')) {
      item.classList.replace('is-open', 'visually-hidden');
    }
  }

  for (let index = 0; index < socialIcons.length; index++) {
    if (socialIcons[index].classList.contains('visually-hidden')) {
      socialIcons[index].classList.replace('visually-hidden', 'is-open');
    } else if (socialIcons[index].classList.contains('is-open')) {
      socialIcons[index].classList.add('visually-hidden');
    }
  }

  for (let index = 0; index < achievementIcons.length; index++) {
    if (achievementIcons[index].classList.contains('visually-hidden')) {
      achievementIcons[index].classList.replace('visually-hidden', 'is-open');
    } else if (achievementIcons[index].classList.contains('is-open')) {
      achievementIcons[index].classList.add('visually-hidden');
    }
  }

  for (const item of footerIcon) {
    if (item.classList.contains('visually-hidden')) {
      item.classList.replace('visually-hidden', 'is-open');
    } else if (item.classList.contains('is-open')) {
      item.classList.replace('is-open', 'visually-hidden');
    }
  }
}
