
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    effect:"fade",
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter:true,
      disableOnInteraction:false,
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  
  
 