import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { moveInTL } from "./moveIn";
import { enterPopTL } from "./enterPop";
import { liftOffPopTL } from "./liftOffPop";
import { flyPopTL } from "./flyPop";


let mainTL = gsap.timeline({paused:true});

mainTL.add(moveInTL)
        .addLabel("marker")
        .add(enterPopTL)
        .add(liftOffPopTL, "-=3")
        .add(flyPopTL);



    mainTL.play("marker");
    // mainTL.play();