// Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone: {
    smooth: true,
  },
});

new ResizeObserver(() => scroll.update()).observe(
  document.querySelector("[data-scroll-container]")
);

// Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  },
});

// index
