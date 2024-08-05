//  let box1= function myFunctions(){
//     console.log("box one click")
// }
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.style.color = "green";
    box.style.padding = '20px';
    box.style.flex = "1";
    box.style.border = '2px solid pink';  // Adds a border with thickness, style, and color
    box.style.borderRadius = '10px';  // Adds a border-radius
   
    box.style.backgroundColor = 'lightyellow';  // Example: sets the background color
    box.style.margin = '10px';  // Example: adds margin
    box.style.boxShadow = '2px 2px 5px gray';  // Example: adds a shadow effect
});



let box1=document.querySelector(".box")


box1.addEventListener('click',(e)=>{
    console.log("box one click ",e)
})

let box2=document.querySelector("#box-2")


box2.addEventListener('mousemove',(e)=>{
    console.log("box 2 move ",e.clientX,e.clientY)
})


const nameInput= document.querySelector('#nameInput')
nameInput.addEventListener('keydown', (e)=>{
    console.log("key",e.key)
})
//bubbling and capture