let number = prompt('Enter any number:' ,'23234');
number = Number(number); // Convert the input string to a number
document.write("input user values:"+number +'<br>')
let reverser = 0;

while (number != 0) {
    let remainder = number % 10;
    reverser = reverser * 10 + remainder;
    number = Math.floor(number / 10); // Use Math.floor() for integer division
}

console.log('The reverse of the given number is: ' + reverser);
document.write('the reverse number  is :'+reverser)