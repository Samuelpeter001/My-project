const menu = document.querySelector('#Menu');
const menuLinks = document.querySelector('.menu_tab');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
const currentYear = new Date().getFullYear();
let ids = document.getElementById('current').textContent = `${currentYear} Samuel Peter Nigeria`;
document.getElementById('lastMod').textContent = `Last modified: ${document.lastModified}`;