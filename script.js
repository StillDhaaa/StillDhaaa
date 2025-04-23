// This script uses Feather Icons to replace all <i> elements with SVG icons
feather.replace()


// This script creates a loading animation that fills a progress bar and then displays the main content
window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");

    setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = 0;

        setTimeout(() => {
        loader.style.display = "none";
        }, 500); // Setelah fade out
      }, 500); // Waktu total sebelum mulai fade out
    });;

// This script handles the scroll-to-top button functionality
function scrollToSection(id) {
    const target = document.getElementById(id);
    const offset = 60; // scroll offset, sesuaikan seberapa jauh dari atas

const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;

window.scrollTo({
    top: topPos,
    behavior: 'smooth'
});
}

// sript menu
const hamburger = document.getElementById('menu');
const navMenu = document.getElementById('navbar-nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});
