// Params
let mainSliderSelector = '.main-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed: 1000,
      loopAdditionalSlides: 1,
      grabCursor: true,
      watchSlidesProgress: true,
      on: {
        progress: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
              swiper.slides[i].querySelector("img").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector("img").style.transition =
              speed + "ms";
          }
        }
      }
    };

let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
