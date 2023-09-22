/******* 메인 실행 스크립트 *******/
const mainAni = {
  init() {
    this.mainSwiper(); // mainSwiper 함수 호출
    this.textDropdown(); // 메인 진입시 드랍다운 실행
    this.scaleEvent(); // 이미지 커지는 이벤트
  },

  textDropdown() {
    this._tit = document.querySelectorAll('.chapter-01 .tit');
    const mainTl = gsap.timeline();
    // 메인 TextDropdown 이벤트
    mainTl.to(this._tit, { yPercent: 50, opacity:1, duration: 1.5, ease: 'ease-in' }); // ypercent 대신 yPercent를 사용합니다.  
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
    this._titSecond = document.querySelector('.chapter-01 .first .tit');
    this._descSecond = document.querySelector('.chapter-01 .first .desc');
    this._imgContents = document.querySelector('.chapter-01 .img_contents');
    this._imgFirst = document.querySelector('.chapter-01');

    gsap.to(this._imgContents, {
      ease: "none",
      scrollTrigger: {
        trigger: this._imgFirst,
        start: "0",
        end: "10",
        scrub: true,
        markers: true,
        pin: true,
        
        onLeave: () => { 
          gsap.to(this._imgContents, { width: '100%', height:'100%', bottom:0, duration: 1.5, ease: 'ease-in' }); // ypercent 대신 yPercent를 사용합니다.  
          gsap.to(this._titSecond, { yPercent:100, color:"white", duration: 1.5, ease: 'ease-in' }); // ypercent 대신 yPercent를 사용합니다.  
          gsap.to(this._descSecond, { bottom: "20%", duration: 1.5, ease: 'ease-in' }); // ypercent 대신 yPercent를 사용합니다.  
          this._titSecond.style.mixBlendMode = 'inherit';
        },
      },
    });
  },
};

// chapterFirst 객체의 init 메서드 호출
mainAni.init();
