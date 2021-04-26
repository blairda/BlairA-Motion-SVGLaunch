import { gsap } from "gsap";

export let moveInTL = gsap.timeline();

moveInTL.from("#background-sky", {alpha: 0, duration: 1})
        .from("#cloud-2", {duration: 1, ease: "bounce.out", y: -400, alpha: 0}, "-=0.5")
        .from("#cloud-3", {duration: 1, ease: "bounce.out", y: -700, alpha: 0}, "-=0.5")
        .from("#cloud-1", {duration: 1, ease: "bounce.out", y: -700, alpha: 0}, "-=0.5")
        
        .from("#background-strawberry", {x: "-=2000", duration: 1})
        .from("#middleground-chocolate", {x: "+=2000", duration: 1}, "-=0.75")
        .from("#foreground-vanilla", {x: "-=2000", duration: 1}, "-=0.75");