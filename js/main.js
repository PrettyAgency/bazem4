// Mobile nav toggle
(function () {
  var burger = document.querySelector('.burger');
  var mobileNav = document.querySelector('.mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav__close');
  if (!burger || !mobileNav) return;
  function toggle() {
    var open = mobileNav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
  }
  burger.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', toggle);
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileNav.classList.remove('is-open');
      burger.classList.remove('is-open');
    });
  });
})();

// Scroll-reveal
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach(function (el) { io.observe(el); });
  setTimeout(function () {
    els.forEach(function (el) { el.classList.add('is-visible'); });
  }, 2500);
})();

// Parallax image (Our Approach panel)
(function () {
  var el = document.querySelector('[data-parallax]');
  if (!el) return;
  window.addEventListener(
    'scroll',
    function () {
      if (window.innerWidth > 768) {
        el.style.transform = 'translateY(' + window.scrollY * 0.12 + 'px)';
      }
    },
    { passive: true }
  );
})();

// Project filter (Projects page)
(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');
  if (!buttons.length) return;
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        var status = card.getAttribute('data-status');
        card.classList.toggle('is-hidden', filter !== 'all' && status !== filter);
      });
    });
  });
})();
