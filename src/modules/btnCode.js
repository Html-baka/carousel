import itemCheck from "./itemCheck.js";

let imgDefaultPosition = 1; //nth-child(1)
let clickLock = false;

const nextBtn = ()=>{
   if(clickLock == false){
      if(itemCheck('next',imgDefaultPosition)){
         clickLock = true;
         imgDefaultPosition++;
         document.querySelector(`.item_wrapper`).style.cssText = "opacity: 10%;";
         setTimeout(()=>{
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition})`).style.cssText = "display: block;";
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition - 1})`).style.cssText = "display: none;";
            document.querySelector(`.item_wrapper`).style.cssText = "opacity: 100%;";
            clickLock = false;
         },500)
         
      }
   }
}

const prevBtn = ()=>{
   if(clickLock == false){
      if(itemCheck('prev',imgDefaultPosition)){
         clickLock = true;
         imgDefaultPosition--;
         document.querySelector(`.item_wrapper`).style.cssText = "opacity: 10%;";
         setTimeout(()=>{
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition + 1})`).style.cssText = "display: none;";
            document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition})`).style.cssText = "display: block;";
            document.querySelector(`.item_wrapper`).style.cssText = "opacity: 100%;";
            clickLock = false;
         },500)
         
      }
   }
}

export {nextBtn, prevBtn};