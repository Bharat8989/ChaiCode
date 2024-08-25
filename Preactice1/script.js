var rect=document.querySelector("#center");
rect.addEventListener("mousemove",function (details) {
    var reactAngleLocation= rect.getBoundingClientRect();
//   console.log("hey i am Bharat kadam")
//   console.log(details.clientX- reactAngleLocation.left )
   var inSideRectVal= details.clientX - reactAngleLocation.left
   if(inSideRectVal<reactAngleLocation.width/2){
    // console.log("left")
    var redColor=gsap.utils.mapRange(0,reactAngleLocation.width/2,255,0 ,inSideRectVal);
    gsap.to(rect,{
        backgroundColor:`rgb(${redColor},0,0)`,
        ease:Power4,

    })

   }
   else{
    // console.log("right")
   }
});

// console.log(gsap.utils.mapRange(0,250 ,255,0 ,23));