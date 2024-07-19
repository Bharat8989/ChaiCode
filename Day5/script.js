//functions declarations

//even and odd 

function checkEvenOdd(number)
{
    if(number%2===0){
        console.log(number+ " is even")
        document.write(` ${number} even number \n`)
    }
    else{
        console.log(number+ " is odd ")
        document.write(` <br>   ${number} odd number`)
    }
}
checkEvenOdd(23)
checkEvenOdd(20)

//Square number 

function Square(number1)
{
    console.log(number1*number1)
    return number1*number1;
    
    

}
const result1=Square(25)
console.log("square of",result1)
document.write("<br> square of :"+result1)

//functions expressions

//find the maximum of two numbers and log the result to the console

const findMax = function(a, b) {
    return a > b ? a : b;
  };
  
  const num1 = 5;
  const num2 = 10;
  const max = findMax(num1, num2);
  console.log("The maximum number is: " + max);

  


  const concatStrings = function(str1, str2) {
    return str1 + str2;
  };
  
  const string1 = "Hello, ";
  const string2 = "world!";
  const result = concatStrings(string1, string2);
  console.log(result); // Output: Hello, world!
  

  //Arrow Functions 

  // arrow functions to calculate the sum of two numbers and return the result

  const myFunctions={
    add:(a,b)=>{
            return a+b;
    }

  };
  const result11 = myFunctions.add(23, 23);
  console.log(result11); 

  //functions parameters and default values

  //


  function myFunctions1(x,y=2)
  {
    return x+y;

  }
  const add12=myFunctions1(23)
  console.log(add12)


console.log("functions parameters and default values")
//
function greet(name, age = 'unknown') {
  return `Hello, ${name}! ${age === 'unknown' ? 'We don\'t know your age.' : `You are ${age} years old.`}`;
}

// Example usage:
console.log(greet('bharat',45));        
console.log(greet('suraj', 30));    


console.log("higher order functions")
//

function repeatFunction(func, n) {
  for (let i = 0; i < n; i++) {
      func();
  }
}

// Example usage
function sayHello() {
  console.log("Hello!");
}

repeatFunction(sayHello, 3);
