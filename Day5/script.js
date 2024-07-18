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

//