var menuMobile = document.querySelector("section#menuMobile");
var icon = document.querySelector("#listenerMenu");

function openMenu() {
    icon.className = 'fas fa-times white';
    menuMobile.className = 'animate__animated animate__fadeInLeftBig'
    menuMobile.style.display = 'flex';
}
function closeMenu() {
    icon.className = 'fas fa-bars white';
    menuMobile.className = 'animate__animated animate__fadeOutLeftBig'
}