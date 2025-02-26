function navigateToPage(value) {
    if (value) {
      window.location.href = value;
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
const sr = ScrollReveal({
    distance: '90px',
    duration: 2500,
    delay: 400,
    reset: true
});
sr.reveal('.search-bar', { delay: 200, origin: 'top' });
sr.reveal('.sign-in', { delay: 300, origin: 'right' });
sr.reveal('.sign-up', { delay: 400, origin: 'bottom' });
sr.reveal('.sell', { delay: 500, origin: 'left' });
sr.reveal('.categories', { delay: 600, origin: 'right' });
sr.reveal('.banner img', { delay: 700, origin: 'top' });
sr.reveal('.recomendation .box', { delay: 800, origin: 'bottom', interval: 300 });
sr.reveal('.data', { delay: 900, origin: 'left' });
sr.reveal('.category', { delay: 1000, origin: 'right' });
sr.reveal('.tag', { delay: 1100, origin: 'top' });
sr.reveal('.description', { delay: 1200, origin: 'bottom', interval: 300 });
sr.reveal('.rights', { delay: 1300, origin: 'left' });
});