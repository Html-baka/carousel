
function createDots() {
   const maxLength = document.querySelectorAll('.carousel_item').length; // number of images
   for (let i = 1; i < maxLength; i++){
      let clone = document.querySelector(`.fa-circle-dot`).cloneNode(true);
      document.querySelector(`.dot_wrapper`).append(clone)
   }
}

function dotCssChange(position) {
   let dotArr = document.querySelectorAll(`.fa-circle-dot`);
      for( let i = 0; i < dotArr.length; i++ ) {
         dotArr[i].style.cssText = "opacity: 1;";
      }
      console.log();
      document.querySelectorAll(`.fa-circle-dot`)[position].style.cssText = "opacity: 0.3;";
}

export { createDots as default, dotCssChange };