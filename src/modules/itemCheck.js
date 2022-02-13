import rotate from "./rotate.js";
//carousel item's number check
export default function itemCheck(btn,imgDefaultPosition,maxLength){
   if (btn == 'next'){
      if(imgDefaultPosition < maxLength){
         return true;
      } else if (imgDefaultPosition - maxLength === 0){
         rotate(`start`);
      }
       
   } else if (btn =='prev'){
      if(imgDefaultPosition > 1) {
         return true;
      } else if (imgDefaultPosition === 1) {
         rotate(`end`);
      }
   }
};