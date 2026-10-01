
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

const readMoreBtn = document.getElementById("readMoreBtn");
const aboutMore = document.querySelector(".about-more");

readMoreBtn.addEventListener("click", function () {

    aboutMore.classList.toggle("show");
    readMoreBtn.classList.toggle("active");

    if (aboutMore.classList.contains("show")) {
        readMoreBtn.innerHTML = 'Read Less <span>↑</span>';
    } else {
        readMoreBtn.innerHTML = 'Read More <span>↓</span>';
    }

});
