document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 300,
        reset: true
    });
    sr.reveal('.logo img', { delay: 200, origin: 'top' });
    sr.reveal('.search-bar', { delay: 300, origin: 'top' });
    sr.reveal('.nav-buttons button', { delay: 400, origin: 'right', interval: 200 });
    sr.reveal('.categories a', { delay: 500, origin: 'bottom', interval: 150 });
    sr.reveal('.sell-form h2', { delay: 600, origin: 'top' });
    sr.reveal('form label', { delay: 700, origin: 'left', interval: 200 });
    sr.reveal('form input, form select, form textarea', { delay: 800, origin: 'right', interval: 200 });
    sr.reveal('.submit-btn', { delay: 1000, origin: 'bottom' });
    sr.reveal('footer', { delay: 1100, origin: 'bottom' });
});
