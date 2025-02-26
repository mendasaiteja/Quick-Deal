document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '90px',
        duration: 2500,
        delay: 400,
        reset: true
    });

    sr.reveal('.logo img', { delay: 200, origin: 'top' });
    sr.reveal('nav ul li', { delay: 300, origin: 'right', interval: 200 });
    sr.reveal('.category-banner h2', { delay: 400, origin: 'left' });
    sr.reveal('.category-banner p', { delay: 500, origin: 'right' });
    sr.reveal('.recomendation .box', { delay: 600, origin: 'bottom', interval: 300 });
    sr.reveal('.box img', { delay: 700, origin: 'top' });
    sr.reveal('.box h2', { delay: 800, origin: 'left' });
    sr.reveal('.box h1', { delay: 900, origin: 'right' });
    sr.reveal('.box a', { delay: 1000, origin: 'bottom' });
    sr.reveal('footer', { delay: 1100, origin: 'bottom' });
});
