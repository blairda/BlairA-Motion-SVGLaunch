import { gsap } from "gsap";

export let enterPopTL = gsap.timeline();


gsap.set(".rocket",{transformOrigin:"center"});

enterPopTL.fromTo("#rocket-pop", {duration:1, alpha:0, y:"+=125"}, {duration:1, alpha:1, y:"-=450"})
            .fromTo("#rp-blue",{alpha:0, scale:0.25, y:"-=200"},{display: "block", alpha: 1, duration:0.5, scale:1, y:"+=200"}, "-=.25")
            .fromTo("#rp-white",{alpha:0, scale:0.25, y:"-=200"},{display: "block", alpha: 1, duration:0.5, scale:1, y:"+=200"}, "-=.25")
            .fromTo("#rp-red",{alpha:0, scale:0.25, y:"-=200"},{display: "block", alpha: 1, duration:0.5, scale:1, y:"+=200"}, "-=.25")
            .to("#rocket-pop", {duration: 1, ease: "bounce.out", y: "+=325"})
            .to(".rocket-lines-b", {duration:0.25, alpha:0.5, stroke:"#ffffff", repeat:5, yoyo:true})
            .to(".rocket-lines-w", {duration:0.25, alpha:0.5, stroke:"#ffffff", repeat:5, yoyo:true}, "-=0.5")
            .to(".rocket-lines-r", {duration:0.25, alpha:0.5, stroke:"#ffffff", repeat:3, yoyo:true}, "-=0.25");