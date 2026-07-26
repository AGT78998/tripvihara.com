
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle mobile menu open/closed
function toggleNav() {
    navLinks.classList.toggle('open');
}

hamburger.addEventListener('click', toggleNav);
hamburger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') toggleNav();
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

