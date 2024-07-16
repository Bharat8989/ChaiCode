//tasks activities

//i)if else statements

//no is positive negative or zero and log the result to the console

const num = prompt("Enter your number:");
if (num >= 0) {
    console.log("Positive number");
    document.write("You entered a positive number.");
} else {
    console.log("Negative number");
    document.write("You entered a negative number.");
}

// person is eligible to vote age-18


const vote=23;
const age=prompt("enter your age:" ,"23")
if(age>=18){
    console.log("you age eligible for voting")
}
else{
    console.log("you are not eligible for voting")
}

// Nested if-else statements

let num1 = prompt("Enter the number 1");
let num2 = prompt("Enter the number 2");
let num3 = prompt("Enter the number 3");
let num4 = prompt("Enter the number 4");
let num5 = prompt("Enter the number 5");

console.log("num1: " + num1 + " num2: " + num2 + " num3: " + num3 + " num4: " + num4 + " num5: " + num5);

if (num1 >= num2) 
{
    if (num1 >= num3)
    {
        if (num1 >= num4) 
        {
            if (num1 >= num5) 
            {
                console.log("num1 is the greatest");
            } else 
            {
                console.log("num5 is the greatest");
            }
        } else 
        {
            if (num4 >= num5) 
            {
                console.log("num4 is the greatest");
            } else 
            {
                console.log("num5 is the greatest");
            }
        }
    } else 
    {
        if (num3 >= num4) 
        {
            if (num3 >= num5) 
            {
                console.log("num3 is the greatest");
            } else 
            {
                console.log("num5 is the greatest");
            }
        } else 
        {
            if (num4 >= num5) 
            {
                console.log("num4 is the greatest");
            } else 
            {
                console.log("num5 is the greatest");
            }
        }
    }
} else 
{
    if (num2 >= num3) 
        {
        if (num2 >= num4) 
        {
            if (num2 >= num5)
            {
                console.log("num2 is the greatest");
            } else
            {
                console.log("num5 is the greatest");
            }
        } else 
        {
            if (num4 >= num5) 
            {
                console.log("num4 is the greatest");
            } else 
            {
                console.log("num5 is the greatest");
            }
        }
    } else 
    {
        if (num3 >= num4) 
            {
            if (num3 >= num5) 
            {
                console.log("num3 is the greatest");
            } else 
            {
                console.log("num5 is the greatest");
            }
        } else 
        {
            if (num4 >= num5) 
                {
                console.log("num4 is the greatest");
            } else {
                console.log("num5 is the greatest");
            }
        }
    }
}


//ternary operator

var no1=prompt("enter  the number 1")
var no2=prompt("enter the number 2")
var no3=prompt("enter the number 3")

document.write("no1: " +no1 +" no2: "+no2+" no2: "+no3 +" <br>");
console.log("no1: " +no1 +" no2: "+no2+" no2: "+no3)

let big=(no1 >= no2 && no1 >= no3)
              ? no1
              : (no2 >= no1 && no2 >= no3)
                ?  no2
                : no3;
console.log("greatest no."+big)

// palindrome number

const number = 129

let temp = number; 
let rev = 0;
let  sum= temp; 

while(temp !== 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
}

if (sum === rev) {
    console.log(sum + " is a palindrome number");
} else {
    console.log(sum + " is not a palindrome number");
}

