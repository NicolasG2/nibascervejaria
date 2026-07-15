// Menu Mobile
function toggleMenu() {
    const menu = document.getElementById('menuMobile');
    menu.classList.toggle('active');
}

// Fechar o menu ao clicar em um link
document.addEventListener('DOMContentLoaded', () => {
    const mobileLinks = document.querySelectorAll('.menu-mobile a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('menuMobile');
            menu.classList.remove('active');
        });
    });
});