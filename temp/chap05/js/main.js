gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".container .panel");
let container = document.querySelector('.container');

panels.forEach((panel, index) => {
  gsap.to(panel, {
    scrollTrigger: {
      trigger: container,
      start: "top top", 
      end: "+=5000", 
      markers: true, 
      pin:true,
      onEnter: () => {
        gsap.to(panels, { yPercent: -100, duration: 0.5, ease: "power2.in", stagger: 1 })
            .pause()
      },
    },
  });
});
