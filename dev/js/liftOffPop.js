import { gsap } from "gsap";

export let liftOffPopTL = gsap.timeline();

gsap.set("#rocket-pop",{transformOrigin:"center"});

liftOffPopTL.to("#rocket-pop", {duration:4, y:"-=200", ease: "power4.in", scale:0.75}, "goingUp")
            .to("#wafer-cones",{duration:3, y:"+=500", ease: "power3.in"}, "goingUp")
            .to("#sugar-cones",{duration:4, y:"+=500", ease: "power3.in"}, "goingUp")
            .to("#neapolitan",{duration:4, y:"+=500", ease: "power3.in"}, "goingUp")
            .to("#cherry", {duration: 4, x: "+=200", y: "-=200", rotate: "-120", transformOrigin: "right top", alpha: 0}, "-=1")
            .to("#clouds",{duration:5, y:"+=1150", ease: "power3.in", alpha:0}, "goingUp")
            .to("#background-sky",{duration:5, fill:"#170A6E", ease: "power3.in"}, "goingUp")
            
            

;