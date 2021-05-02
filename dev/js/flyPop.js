import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

gsap.set("#ice-cream",{transformOrigin:"top center"});
gsap.set("#candies circle",{transformOrigin:"center"});

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
            ease: "none",
            scale:1
        }, "fly")

        .fromTo("#candies circle",{alpha:0, scale:0},{display: "block", alpha: 1, scale:1, duration:2}, "-=3.5")
        .to("#candy-1",{duration:0.5, scale:1.25, repeat:"-1", yoyo:true}, "c16")
        .to("#candy-2",{duration:0.5, scale:0.75, repeat:"-1", yoyo:true}, "c28")
        .to("#candy-3",{duration:0.5, scale:1.25, repeat:"-1", yoyo:true}, "c39")
        .to("#candy-4",{duration:0.5, scale:0.75, repeat:"-1", yoyo:true}, "c410")
        .to("#candy-5",{duration:0.5, scale:1.25, repeat:"-1", yoyo:true}, "c57")
        .to("#candy-6",{duration:0.5, scale:0.75, repeat:"-1", yoyo:true}, "c57")
        .to("#candy-7",{duration:0.5, scale:1.25, repeat:"-1", yoyo:true}, "c16")
        .to("#candy-8",{duration:0.5, scale:0.75, repeat:"-1", yoyo:true}, "c28")
        .to("#candy-9",{duration:0.5, scale:1.25, repeat:"-1", yoyo:true}, "c39")
        .to("#candy-10",{duration:0.5, scale:0.75, repeat:"-1", yoyo:true}, "c410")


;


// MotionPathHelper.create("#rocket-pop");