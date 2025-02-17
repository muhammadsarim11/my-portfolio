gsap.from('.section-title', { opacity: 0, y: -50, duration: 1.5, ease: 'power2.out' });
gsap.from('.skill-card', {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: 'power2.out',
  stagger: 0.3
});

document.querySelectorAll('.skill-card').forEach((card) => {
  const details = card.querySelector('.details');

  card.addEventListener('mouseover', () => {
    gsap.to(card, { scale: 1, duration: 0.3 });
    details.style.display = 'block';
    gsap.to(details, { opacity: 1, transform: 'translateY(0)', duration: 0.5 });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, { scale: 1, duration: 0.3 });
    gsap.to(details, { opacity: 0, transform: 'translateY(-10px)', duration: 0.5, onComplete: () => {
      details.style.display = 'none';
    }});
  });
});
