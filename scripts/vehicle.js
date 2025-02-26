document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 300,
        reset: true
    });

    sr.reveal('.logo', { delay: 200, origin: 'left' });
    sr.reveal('nav', { delay: 300, origin: 'top' });
    sr.reveal('.category-banner h2', { delay: 400, origin: 'top' });
    sr.reveal('.category-banner p', { delay: 500, origin: 'bottom' });
    sr.reveal('.product-item', { delay: 600, origin: 'bottom', interval: 300 });
    sr.reveal('footer', { delay: 700, origin: 'top' });
});
