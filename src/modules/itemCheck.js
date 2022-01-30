//carousel item's number check
export default function itemCheck(btn,imgDefaultPosition){
   const maxLength = document.querySelectorAll('.carousel_item').length;
   if (btn == 'next'){
      if(imgDefaultPosition < maxLength){
         return true;
      }
   } else if (btn =='prev'){
      if(imgDefaultPosition > 1) {
         return true;
      }
   }
};