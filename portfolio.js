// JavaScript for navigation toggle and Lucide icons
window.addEventListener('DOMContentLoaded', function () {
    // Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Navigation toggle
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Contact form submission (basic example)
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});
