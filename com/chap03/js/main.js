// paralix

const swiper = new Swiper(".swiper-paralix", {
  slidesPerView: '1',
  loop: true,
  speed: 400,

  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-50%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

const swiper02 = new Swiper(".swiper-carousel", {
  centeredSlides: true,
  spaceBetween: 20,
  initialSlide:1,
  loop: true,
  speed: 400,
  slidesPerView: '1.1',
  on : 
    function touchMove(e)  {
      
  },
});



