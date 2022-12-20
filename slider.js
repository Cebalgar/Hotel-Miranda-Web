// SLIDER ROOMS
const swiper = new Swiper(".rooms__slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  effect: "fade",
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//SLIDER FACILITES
const initSwiperFacilities = function () {
  const swiper2 = new Swiper(".facilities__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
//SLIDER MENU
const initSwiperMenu = function () {
  const swiper3 = new Swiper(".menu__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

//PAGINATION MENU
const initPaginationMenu = function () {
  const pagination = new Swiper(".menu__pagination", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

//INIT SWIPERS
const mql = window.matchMedia("(max-width: 899px)");
const mql2 = window.matchMedia("(max-width: 799px)");
if (innerWidth < 900) {
  initSwiperFacilities();
  initSwiperMenu();
}
if (innerWidth < 800) {
  initPaginationMenu();
}
mql.onchange = (e) => {
  if (e.matches) {
    initSwiperFacilities();
    initSwiperMenu();
  } else {
    location.reload();
  }
};
mql2.onchange = (e) => {
  if (e.matches) {
    initPaginationMenu();
  } else {
    location.reload();
  }
};
