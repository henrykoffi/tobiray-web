
window.addEventListener('scroll', () => {
  document.querySelector('.nav__menu').classList.toggle
  ('window-scroll', window.scrollY > 0)
});

// window.addEventListener('scroll', () => {
//   document.querySelector('nav__menu').classList.toggle('window-scroll', window.scrollY > 0)
// });



const navLink = document.querySelector('.nav-links')
const closeIcon = document.querySelector('.close-icon')
const openIcon = document.querySelector('.open-icon')

openIcon.addEventListener('click', () => {
  navLink.style.display = 'flex'
});


closeIcon.addEventListener('click', () => {
  navLink.style.display = 'none'
})