//add two numbers
//Arithmetic operations
let a=90;
let b=34;
console.log(a+b)

console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


//assignment Operators

var c=20

console.log(c)
c+=34
console.log(c)
c-=10
console.log(c)

//comparison Operators
let x=20;
let y=30;
console.log(x>y)
console.log(x<y)
console.log(x==y)
console.log(x!=y)

// logical operators

console.log(x>y && x<y)
console.log(x==23 || y==34)
console.log(!(x==y))

//ternary Operator


const No=prompt("enter the No.")
// No=Number(No)

const result= (No>0)? "positive":(No<0)?"negative":"zero";
console.log("the numbers is:"+result)