import { dotCssChange } from "./dotCode.js";
import itemCheck from "./itemCheck.js";
let imgDefaultPosition = 1; //nth-child(1)
const maxLength = document.querySelectorAll('.carousel_item').length; // number of images
let clickLock = false;

const nextBtn = ()=>{
   if(clickLock == false){
      if(itemCheck('next',imgDefaultPosition,maxLength)){
         clickLock = true;
         imgDefaultPosition++;
         document.querySelector(`.item_wrapper`).style.cssText = "opacity: 10%;";
         setTimeout(()=>{
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition})`).style.cssText = "display: block;";
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition - 1})`).style.cssText = "display: none;";
            document.querySelector(`.item_wrapper`).style.cssText = "opacity: 100%;";
            clickLock = false;
         },500)
         
      } else{
         imgDefaultPosition = 1; // refreshes the counter to make new carousel loop;
      }
      dotCssChange(imgDefaultPosition - 1);
   }
   
}

const prevBtn = ()=>{
   if(clickLock == false){
      if(itemCheck('prev',imgDefaultPosition,maxLength)){
         
         clickLock = true;
         imgDefaultPosition--;
         document.querySelector(`.item_wrapper`).style.cssText = "opacity: 10%;";
         setTimeout(()=>{
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition + 1})`).style.cssText = "display: none;";
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition})`).style.cssText = "display: block;";
            document.querySelector(`.item_wrapper`).style.cssText = "opacity: 100%;";
            clickLock = false;
         },500)
      } else{
         imgDefaultPosition = maxLength; // refreshes the counter to make new carousel loop;
      }
      dotCssChange(imgDefaultPosition - 1);
   }
}

const dotClick = (position)=>{
   if(clickLock == false){
      document.querySelector(`.item_wrapper`).style.cssText = "opacity: 10%;";
      setTimeout(()=>{
         document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition})`).style.cssText = "display: none;";
         document.querySelector(`.carousel_item:nth-child(${position + 1})`).style.cssText = "display: block;";
         document.querySelector(`.item_wrapper`).style.cssText = "opacity: 1;";
         clickLock = false;
         imgDefaultPosition = position + 1;
         //dots css change
         dotCssChange(position)
      },500)
      
   }
}
export {nextBtn, prevBtn, dotClick};