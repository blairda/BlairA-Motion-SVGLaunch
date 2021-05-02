import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

gsap.set("#ice-cream",{transformOrigin:"top center"});

export let flyPopTL = gsap.timeline();

flyPopTL.from("#ice-cream",{duration:2, y:"-=400", alpha:0}, "fly")
        .to("#ic-sprinkles path",{duration:0.5, rotate:5, y:"+=5", repeat:7, yoyo:true}, "fly")
        .to("#ice-cream",{duration:2, y:"+=400", x:"+=100", scale:5}, "-=1")

        .to("#rocket-pop", {
            duration: 7,
            motionPath: {
                path: "#rocket-path",
                align:"#rocket-path",
                alignOrigin: [0.5, 0.5],
                autoRotate: 90
            },
            ease: "power1",
            scale:1
        }, "fly")

        



;


// MotionPathHelper.create("#rocket-pop");