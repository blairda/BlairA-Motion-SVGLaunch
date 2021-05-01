import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
// GSDevTools.create();

import { moveInTL } from "./moveIn";
import { enterPopTL } from "./enterPop";


let mainTL = gsap.timeline();

mainTL.add(moveInTL)
        .addLabel("marker")
        .add(enterPopTL);



    mainTL.play("marker");
    // mainTL.play();