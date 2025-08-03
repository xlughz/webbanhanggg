const fadeEls = document.querySelectorAll('.fade-in');

  const onScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);

const bannerImg = document.querySelector('.fashion-banner img');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    bannerImg.style.transform = `translateY(${scrollY * 0.3}px)`;
  });

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));