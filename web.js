const menu = document.querySelector('#Menu');
const menuLinks = document.querySelector('.menu_tab');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});