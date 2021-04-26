import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);
GSDevTools.create();

import { moveInTL } from "./moveIn";


let mainTL = gsap.timeline();

mainTL.add(moveInTL);