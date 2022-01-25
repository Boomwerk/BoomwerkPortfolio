let buttonleft = document.querySelector("#buttonleft");
let buttonright = document.querySelector("#buttonright");
let image = document.querySelectorAll(".centercarousel img");
let firstimage = document.querySelector("#firstimage");
let start = 0;
let end = image.length -1;

buttonright.addEventListener("click", function(){

   start ++;

   if(start >= end){
      start = end;
   }

   firstimage.style.marginLeft = "-" + start*100 + "%";

})

buttonleft.addEventListener("click", function(){

  
   start -= 1;
   
   if(start <= 0){
      start = 0;
   }

   firstimage.style.marginLeft = "-" + start*100 + "%";

})