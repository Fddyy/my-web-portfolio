
// Hamburger
const hb = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hb.addEventListener('click', function() {
    hb.classList.toggle('hamburger-aktif');
    navmenu.classList.toggle('hidden')
});