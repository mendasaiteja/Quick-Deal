document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '90px',
        duration: 2500,
        delay: 400,
        reset: true
    });
    sr.reveal('.logo img', { delay: 200, origin: 'top' });
    sr.reveal('nav ul li', { delay: 300, origin: 'right', interval: 200 });
    sr.reveal('.category-banner h2', { delay: 400, origin: 'bottom' });
    sr.reveal('.category-banner p', { delay: 500, origin: 'top' });
    sr.reveal('.product-item', { delay: 600, origin: 'bottom', interval: 300 });
    sr.reveal('.tag', { delay: 700, origin: 'left' });
    sr.reveal('.price', { delay: 800, origin: 'right' });
    sr.reveal('button', { delay: 900, origin: 'top', interval: 200 });
    sr.reveal('footer', { delay: 1000, origin: 'bottom' });
});
