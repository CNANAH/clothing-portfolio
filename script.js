(function() {
  'use strict';

  // Intersection Observer for scroll-reveal animations
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all product sections
  var sections = document.querySelectorAll('.product-section');
  sections.forEach(function(section) {
    observer.observe(section);
  });

  // Nav background opacity on scroll
  var nav = document.querySelector('.nav');
  var ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        var scrollY = window.scrollY;
        if (scrollY > 60) {
          nav.style.background = 'rgba(251, 247, 240, 0.94)';
          nav.style.boxShadow = '0 1px 20px rgba(58, 34, 24, 0.04)';
        } else {
          nav.style.background = 'rgba(251, 247, 240, 0.82)';
          nav.style.boxShadow = 'none';
        }
        ticking = false;
      });
      ticking = true;
    }
  });

})();
