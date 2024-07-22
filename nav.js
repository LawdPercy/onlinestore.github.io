// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-btn');

    // Toggle menu visibility
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        navLinks.classList.toggle('nav-menu-active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('nav-menu-active');
            menuToggle.classList.remove('active');
        }
    });

    // Close menu when clicking the close button
    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        navLinks.classList.remove('nav-menu-active');
        menuToggle.classList.remove('active');
    });
});
