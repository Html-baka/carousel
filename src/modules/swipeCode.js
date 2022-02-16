import { nextBtn, prevBtn } from "./btnCode.js";

let touchStartVar;
let touchEndVar;

const whereToSwipe = () => {
   if(touchStartVar - touchEndVar < -80){
      prevBtn()
   } else if (touchStartVar - touchEndVar > 80) {
      nextBtn();
   }
}
const touchStart = (event) => {
   touchStartVar = event.changedTouches[0].screenX;
}
const touchEnd = (event) => {
   touchEndVar = event.changedTouches[0].screenX;
   whereToSwipe();
}

export {whereToSwipe as default, touchStart, touchEnd}