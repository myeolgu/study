const swiper = new Swiper(".swiper-carousel", {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: '1.1',
  slideToClickedSlide: true,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    dragSize: 'auto',
  },
});


const swiper02 = new Swiper(".swiper-carousel-02", {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: '1.1',
  touchRatio: 0.1,
  slideToClickedSlide: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});


let swiper04 = new Swiper(".swiper-carousel-04", {
  spaceBetween: 10,
  slidesPerView: '4',
  loop: true,  
});


let swiper03 = new Swiper(".swiper-carousel-03", {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: '1',
  loop: true,
  thumbs: {
    swiper: swiper04,
  },

});

