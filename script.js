const t1 = gsap.timeline();

t1.from(
  "nav",
  0.5,
  {
    opacity: 0,
    y: 50,
  },
  0
);

t1.from(
  ".page1-text",
  0.5,
  {
    opacity: 0,
    y: 50,
  },
  0
);

t1.from(
  ".page2",
  0.5,
  {
    opacity: 0,
    y: 50,
  },
  0
);

t1.to(".page2-img", {
  transform: "translateX(-200%)",

  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "top 0%",
    end: "top -200%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});
