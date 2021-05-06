import { gsap } from "gsap";

export let moveInTL = gsap.timeline();

// gsap.set("#background-strawberry",{transformOrigin:"left center"});
// gsap.set("#middleground-chocolate",{transformOrigin:"right center"});
// gsap.set("#foreground-vanilla",{transformOrigin:"right center"});


moveInTL.from("#background-sky", {alpha: 0, duration: 1})
        .from("#cloud-1", {duration: 1, ease: "bounce.out", y: "-=700", alpha: 0}, "-=0.5")
        .from("#cloud-3", {duration: 1, ease: "bounce.out", y: "-=700", alpha: 0}, "-=0.5")
        .from("#cloud-2", {duration: 1, ease: "bounce.out", y: "-=400", alpha: 0}, "-=0.5")
        .from("#cherry", {duration: 0.5, x: "+=200", y: "-=200", rotate: "-120", transformOrigin: "right top", alpha: 0}, "-=0.25")
        
        // .fromTo("#background-strawberry",{x:"+=2400"},{x:"-=1200", duration:1}, "-=0.25")

        // .from("#background-strawberry", {x: "+=1000", duration: 1}, "-=0.25")

        // .from("#background-strawberry", {x: "-=8000", duration: 1}, "-=0.25")
        // .from("#middleground-chocolate", {x: "+=8000", duration: 1}, "-=0.75")
        // .from("#foreground-vanilla", {x: "-=2000", duration: 1}, "-=0.75")
        
        .from("#sugar-cones g", {y: "-=50", duration: 0.4, alpha: 0, stagger: 0.2}, "-=0.5")
        

        .from("#wafer-cones-left g", {y: "+=200", scale: 0, transformOrigin: "center bottom", duration: 0.75, alpha: 0, stagger: 0.5}, "-=1.25")
        .from("#wafer-cones-right g", {y: "+=200", scale: 0, transformOrigin: "center bottom", duration: 0.75, alpha: 0, stagger: 0.5}, "-=1.5");