gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1", duration: 3});

const tl = gsap.timeline();
tl.to(".page", { yPercent: -100 })
  .to(".section01", { yPercent: -100 })
  .to(".section02", { yPercent: -100 })

ScrollTrigger.create({
  animation: tl,
  trigger: ".full-page",
  start: "top top", 
  end: "+=2000",
  pin: true,
  scrub: 1,
  markers: true
});