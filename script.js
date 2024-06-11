document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800
    });

    // Toggle mobile menu
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Animated progress bars
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });



    // Scroll reveal animation for sections
    ScrollReveal().reveal('.about-content', {
        delay: 300,
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.skills-list', {
        delay: 300,
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.services-list', {
        delay: 300,
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.contact-content', {
        delay: 300,
        distance: '50px',
        origin: 'bottom'
    });

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});