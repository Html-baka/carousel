import {nextBtn, prevBtn} from "./modules/btnCode.js";
import createDots from "../src/modules/dotCode.js";
import { dotClick } from "../src/modules/btnCode.js";

window.onload = createDots();
//next btn code
document.querySelector('.next').addEventListener('click', nextBtn)

//prev btn code
document.querySelector('.prev').addEventListener('click', prevBtn)

//dots click code
let dotArr = document.querySelectorAll(`.fa-circle-dot`);

for( let i = 0; i < dotArr.length; i++ ) {
   const clickPassArg = () => dotClick(i); // wrapper function to pass the i(the position number of dot)
   dotArr[i].addEventListener('click',clickPassArg)
}


