import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flyPopTL = gsap.timeline();

flyPopTL.to("#rocket-pop", {
    duration: 7,
    motionPath: {
        path: "#rocket-path",
        align:"#rocket-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    },
    ease: "power2",
    scale:0.75
});


// MotionPathHelper.create("#rocket-pop");