/******* 메인 실행 스크립트 *******/
const mainAni = {
  init() {
    this.mainSwiper(); // mainSwiper 함수 호출
    this.textDropdown(); // 메인 진입시 드랍다운 실행
    this.scaleEvent(); // 이미지 커지는 이벤트
    // this.secondChapter.init(); // 챕터 2번째
  },

  textDropdown() {
    this._tit = document.querySelectorAll('.chapter-01 .tit');
    gsap.to(this._tit, { yPercent: 50, opacity:1, duration: 1.5, ease: 'ease-in' }); // ypercent 대신 yPercent를 사용합니다.  
  },

  mainSwiper() {
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  },

  // 스크롤시 backgroundimg scale 효과
  scaleEvent() {
    this._titSecond = document.querySelector('.chapter-01 .tit');
    this._descSecond = document.querySelector('.chapter-01 .desc');
    this._swiperContents = document.querySelector('.chapter-01 .swiper');
    this._imgContents = document.querySelector('.chapter-01 .img_contents');
    this._imgFirst = document.querySelector('.chapter-01');


    this.fixedTl = gsap.timeline({
      scrollTrigger: {
          trigger: this._imgFirst,
          start: "1% top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          markers: true,
          pinSpacing: false,
      },
    })

    let fixedTl = gsap.timeline()

    fixedTl.to(this._imgContents, { width: '100%', height:'100%', bottom:0, duration: 1.5, ease: 'ease-in' }) // ypercent 대신 yPercent를 사용합니다.  
           .to(this._titSecond, { yPercent:100, color:"white", duration: 1.5, ease: 'ease-in' }) // ypercent 대신 yPercent를 사용합니다.  
           .to(this._descSecond, { bottom: "20%", duration: 1.5, ease: 'ease-in' }) // ypercent 대신 yPercent를 사용합니다.  

  },
};

// chapterFirst 객체의 init 메서드 호출
mainAni.init();
