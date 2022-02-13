export default function rotate (whereToRotate) {
   let imgDefaultPosition = 1;
   const lastImg = document.querySelectorAll(`.carousel_item`).length;
   if(whereToRotate === `start`){
      document.querySelector(`.item_wrapper`).style.cssText = "opacity: 10%;";
      setTimeout(()=>{
         document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition})`).style.cssText = "display: block;";
         document.querySelector(`.carousel_item:nth-child(${lastImg})`).style.cssText = "display: none;";
         document.querySelector(`.item_wrapper`).style.cssText = "opacity: 100%;";
      },500)
   } else if (whereToRotate === `end`){
      document.querySelector(`.item_wrapper`).style.cssText = "opacity: 10%;";
      setTimeout(()=>{
         document.querySelector(`.carousel_item:nth-child(${lastImg})`).style.cssText = "display: block;";
         document.querySelector(`.carousel_item:nth-child(${imgDefaultPosition})`).style.cssText = "display: none;";
         document.querySelector(`.item_wrapper`).style.cssText = "opacity: 100%;";
      },500)
   }
   
}