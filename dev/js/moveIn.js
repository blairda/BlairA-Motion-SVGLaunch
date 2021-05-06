import { gsap } from "gsap";

export let moveInTL = gsap.timeline();


moveInTL.from("#background-sky", {alpha: 0, duration: 1})
        .from("#cloud-1", {duration: 1, ease: "bounce.out", y: "-=700", alpha: 0}, "-=0.5")
        .from("#cloud-3", {duration: 1, ease: "bounce.out", y: "-=700", alpha: 0}, "-=0.5")
        .from("#cloud-2", {duration: 1, ease: "bounce.out", y: "-=400", alpha: 0}, "-=0.5")
        .from("#cherry", {duration: 0.5, x: "+=200", y: "-=200", rotate: "-120", transformOrigin: "right top", alpha: 0}, "-=0.25")

        .fromTo("#background-strawberry", {x:"-=3600"},{x: "+=2400", duration: 1}, "-=0.25")
        .fromTo("#middleground-chocolate", {x:"+=1200"},{x: "-=2400", duration: 1}, "-=0.75")
        .fromTo("#foreground-vanilla", {x:"-=3600"},{x: "+=2400", duration: 1}, "-=0.75")
        
        .from("#sugar-cones g", {y: "-=50", duration: 0.4, alpha: 0, stagger: 0.2}, "-=0.5")
        

        .from("#wafer-cones-left g", {y: "+=200", scale: 0, transformOrigin: "center bottom", duration: 0.75, alpha: 0, stagger: 0.5}, "-=1.25")
        .from("#wafer-cones-right g", {y: "+=200", scale: 0, transformOrigin: "center bottom", duration: 0.75, alpha: 0, stagger: 0.5}, "-=1.5");