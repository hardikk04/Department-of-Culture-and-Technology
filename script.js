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

t1.from(".page3>h1", {
  opacity: 0,
  y: -100,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".page3>h3", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "top 0%",
    end: "top -10%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".page4-elem", {
  height: "26.6vh",
  stagger: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    start: "top 0%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

t1.to(".plus2", {
  transform: "rotate(0deg)",
  stagger: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    start: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".page4-elem-heading > h1", {
  color: "#FF2A1D",
  stagger: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    start: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".page5-img", {
  transform: "translateX(-200%)",

  scrollTrigger: {
    scroller: "body",
    trigger: ".page5",
    start: "top 0%",
    end: "top -200%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

t1.to(".page7-img", {
  transform: "translateX(-200%)",

  scrollTrigger: {
    scroller: "body",
    trigger: ".page7",
    start: "top 0%",
    end: "top -200%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

t1.from(".page8>h1", {
  opacity: 0,
  y: -100,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page8",
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
    // markers: true,
  },
});
