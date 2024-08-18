//Palindrome Number


let r, sum = 0, temp;
let n = 121;
temp = n;

while (n > 0) {
    r = n % 10;
    sum = (sum * 10) + r;
    n = Math.floor(n / 10); // Use Math.floor() for integer division
}

if (temp === sum) {
    console.log("Palindrome number");
} else {
    console.log("Not palindrome");
}
