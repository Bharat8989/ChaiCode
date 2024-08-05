

//selection of an element
//changing html
let a= document.querySelector("h1")
console.log(a)
a.innerHTML="changed javascript"
console.log(a)
//changing css
let b=document.querySelector("h3")
b.innerHTML="hello world"
b.style.backgroundColor="red";
b.style.fontSize="43px"
// event listener

let c=document.querySelector("h2")
c.innerHTML="mouse click";
c.addEventListener("click",function(){
    c.innerHTML="mouse2 click"
    c.style.color="yellow"
    c.style.backgroundColor="#000"
    console.log("hey")
})


//bulb

let bulb = document.querySelector("#bulb");
bulb.style.height = '300px';
bulb.style.width = '300px';
bulb.style.borderRadius = '50%';
bulb.style.border = "4px solid black";



let button=document.querySelector("button")
button.style.padding="10px 20px"
button.style.fontSize='20px'
button.style.margin="50px"


var flag=0;
button.addEventListener("click",function(){
    if(flag==0)
    {
        bulb.style.backgroundColor="yellow"
        console.log("hey")
        flag=1;
        
    }else{
        bulb.style.backgroundColor='transparent'
        console.log("again clicked")
        flag=0
    }

})