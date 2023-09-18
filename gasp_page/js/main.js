gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".chapter");

let chapterFirst = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    end: "+=1000",
    scrub: true,
    markers: true,
    pin: true,
  },
});

gsap.to('.chapter-2', { xPercent: -80, duration: 2 });
gsap.to('.lottehotel-img', { xPercent: -20, duration: 2 });

