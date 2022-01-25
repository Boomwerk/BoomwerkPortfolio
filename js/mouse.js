let cloudOne = document.querySelector("#cloudone");
let cloudTwo = document.querySelector("#cloudtwo");
let cloudThree = document.querySelector("#cloudthree");
let boomwerk = document.querySelector("#boomwerk");
let island = document.querySelector("#island");

setTimeout(function(){

    
    document.addEventListener("mousemove", function(e){
    
        cloudOne.style.transform = "translate("+ e.clientX /100 +"px, "+ e.clientY /100 +"px)";
        cloudTwo.style.transform = "translate("+ e.clientX /60 +"px, "+ e.clientY /100 +"px)";
        cloudThree.style.transform = "translate("+ e.clientX /70 +"px, "+ e.clientY /100 +"px)";
        boomwerk.style.transform = "translate("+ e.clientX /120 +"px, "+ e.clientY /120 +"px)";
        island.style.transform = "translateX("+ - e.clientX /150 +"px)";
    })

}, 2400)
  