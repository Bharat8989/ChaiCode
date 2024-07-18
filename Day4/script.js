const h1 = document.getElementById('h1');
h1.innerHTML = 'Loops';
document.write("1 to 10 numbers <br> \n")
// Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);

  
  document.write("\n" +i)
}


//Write a program t print the multiplication tables of using a for loop

document.write(' <br> 5 multiplications tables')
console.log("multiplications tables")

for(let step=1;step<=10; step++){
    console.log(5 * step)
    document.write("\n" + 5*step)
}


//while loops

//sum of the numbers from 1 to 10 using a while loops
console.log("sum of 1 to 10")

let sum=0;
let j=1;
while(j<=10)
{
    sum +=j;
   
    console.log(sum)
    j++
}
console.log("sum:",sum)
document.write("<br> 1 to multiplications: "+sum)


//10 to 1 print numbers

console.log('print numbers from 10 to 1')
document.write('<br> print 10 to 1:')
let print=10;
let k=10;
while(k>0)
{
    console.log(k)
    k--
    document.write('<br> '+k)
}

//factorial number using do while loops

document.write('<br> factorial number ')

let number=5;
let factorial=1;
let h=1;
do{
    factorial=factorial*h;
    h++;
}
while(h<=number)
{
    console.log(`factorial of ${number} is: ${factorial}`);
    document.write("<br> "+factorial)
}


//Nested loops

document.write("<br> Nested loops start pattern  <br>")
console.log("star Patters")
let row=5;
for(let x=1;x<=row;x++)
{
   let starPattern='';
   for(let y=1;y<=x;y++)
   {
    starPattern +="*"
   }
   
   console.log(starPattern)
   document.write(starPattern +"<br>")
}

//continue control statement

document.write("<br> control statement <br>")
document.write("<br> 5 number is not print  <br>")
console.log("5 number is not print")
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop body when i is 5
    }
    console.log(i);
    document.write( "<br>"+i)
}


