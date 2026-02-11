/*
  Lightweight carousel controls and sticky-header enhancements.
*/
document.documentElement.classList.remove('no-js');

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-carousel-track]');
  const next = carousel.querySelector('[data-carousel-next]');
  const prev = carousel.querySelector('[data-carousel-prev]');

  if (!track || !next || !prev) return;

  const getStep = () => {
    const firstCard = track.firstElementChild;
    return firstCard ? firstCard.getBoundingClientRect().width + 16 : 260;
  };

  next.addEventListener('click', () => {
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });
});

const header = document.querySelector('[data-sticky-header]');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });
}
