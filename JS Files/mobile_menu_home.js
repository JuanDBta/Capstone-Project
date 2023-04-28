const menuButton = document.getElementById('menu-button');
const navBar = document.querySelector('.nav-bar');
const closeButton = document.getElementById('closex');
const header = document.querySelector('header');
const links = document.querySelectorAll('.title-bar li a');

menuButton.addEventListener('click', () => {
  navBar.classList.add('active');
  if (window.innerWidth <= 768) {
    header.style.display = 'none';
  }
});

closeButton.addEventListener('click', () => {
  navBar.classList.remove('active');
  if (window.innerWidth <= 768) {
    header.style.display = 'block';
  } else {
    header.style.display = 'none';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    header.style.display = 'block';
  } else {
    header.style.display = 'block';
  }
});
