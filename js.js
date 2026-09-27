
gsap.registerPlugin(ScrollTrigger);

gsap.from("#card1", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#card1",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: -1,
   
  }
});
gsap.from("#card2", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#card2",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: -1,
   
  }
});
gsap.from("#card3", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#card3",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: -1,
    
  }
});
gsap.from("#card4", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#card4",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: -1,
    
  }
});


gsap.registerPlugin(ScrollTrigger);

gsap.from("#learn1", {
  x: -80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#learn1",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
   
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#learn2", {
  x: -80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#learn2",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
    
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#learn3", {
  x: -80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#learn3",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
    
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#learn4", {
  x: -80,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "#learn4",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  
  }
});
gsap.from(".skillp", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger:1
});


  gsap.from("nav.navbar", {
  y: -30,
  opacity: 0,
  delay:0.1,
  duration: 0.8,
  ease: "power3.out"
});
