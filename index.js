const menu = document.querySelector('.menu-svg');
const close = document.querySelector('.close-svg');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.add('nav-opened');
});

close.addEventListener('click', () => {
    nav.classList.remove('nav-opened');
});
