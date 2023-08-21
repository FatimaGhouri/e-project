// Team member section carousel scripting (About Page)

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 48,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      200: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      900: {
          slidesPerView: 3,
      },
  },
});

  // trending section slider scripting (Home Page)
  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
