import './style.css';

// This will add HTML content to the element with id 'app'
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
  </div>
`;

// Simple console logs
let count1 = 12;
console.log(count1);
console.log("hello world");

// console.log(b)
let b=23;
 console.log(b)


 let c=[12,32];
 let d=c
 console.log(c)
 console.log(d)
 
 d.pop();
 console.log(d)
console.log(c)

console.log("print the number of 1 to 10 using while loop")

for(let i=1; i<=10;i++)
  {
    console.log(i)
  }


  console.log('functions')


  function main(){
    console.log("hello bolo")

  }
  main();

// var is functions scoped hota hai
console.log("var variable is used")
  function abcd(){
   for(var j=0;j<=12;j++){
    console.log(j)
   }
   console.log(j)
  }
  console.log("let variable user")
  
  abcd();

  function dcd(){
    for(let k=15;k<23;k++){
      console.log(k)
    }
    // console.log(k)
  }
  dcd();

 var  a1=10;
 let a2=123;


 console.log("add of four number:"+(1+2+3+4+3))



 function abcde(){
  
  var kk=12;
  console.log("execution context")
  function def(){
    console.log(kk)
    var kk1=23;
    console.log("lexical enviroment")
  }
  def();
 }
 abcde();

 var arr=[2,3,4,5,6,7]
 var arr1=[...arr];
 var arr2=arr;
//  console.log(arr2)
//  arr2.pop();
//  console.log(arr2)
//  console.log(arr)

 arr1.pop();
 console.log(arr)
 console.log(arr1)

 var array=[1,2,3,4,3,4,5,7,8,9,9,7,6,53,34]
 array.forEach(function(val){
       console.log(val+2)
 });
 console.log(array)


 var obj={ 
     name:'bharat',
     age:34
 }
 for(var key in obj){
  // console.log(key)
  console.log(key,obj[key])
 }

 setTimeout(function(){
  console.log("2 second badd chalo")
 },2000);
//first class functions 
//var me functions ko save karsakte hai
 var y=function(){

 }
 function abcdef(a){
        a(); 
 }
 abcdef(function(){
  console.log("hello world !!!!!!!!!!!!!!!")
 })