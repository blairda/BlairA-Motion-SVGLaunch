import { gsap } from "gsap";

export let enterPopTL = gsap.timeline();


gsap.set(".rocket",{transformOrigin:"center"});

enterPopTL.fromTo("#rocket-pop", {duration:1, alpha:0, y:"+=125"}, {duration:1, alpha:1, y:"-=450"})
            .fromTo("#rp-blue",{alpha:0, scale:0.25, y:"-=200"},{display: "block", alpha: 1, duration:0.5, scale:1, y:"+=200"}, "-=.25")
            .fromTo("#rp-white",{alpha:0, scale:0.25, y:"-=200"},{display: "block", alpha: 1, duration:0.5, scale:1, y:"+=200"}, "-=.25")
            .fromTo("#rp-red",{alpha:0, scale:0.25, y:"-=200"},{display: "block", alpha: 1, duration:0.5, scale:1, y:"+=200"}, "-=.25")



;