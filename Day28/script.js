// const coding=['bharat', "suraj", "pavan", 'sachin'];

// const values=coding.forEach(function(item){
   
//     console.log(item)
//     return item
// })
// console.log("object")
// console.log(values)

// const myNums=[1,2,3,4,5,6,7,8,9,10]
 

// const print=myNums.filter((val)=>{
//     console.log(val)
//     return val;

  

// })
// console.log(print)

//use filter methods
const books=[
    {
        title:'book one', genre:'fiction1', publish:1290, edition:1980
    },
    {
        title:'book two', genre:'fiction2', publish:1291, edition:2000
    },
    {
        title:'book three', genre:'fiction3', publish:1292, edition:2001
    },,
    {
        title:'book four', genre:'fiction4', publish:1293, edition:2002
    },
    {
        title:'book five', genre:'fiction5', publish:1294, edition:2003
    },
    {
        title:'book six', genre:'fiction6', publish:1295, edition:2004
    },
    {
        title:'book eight', genre:'fiction8', publish:1296, edition:2005
    },
    {
        title:'book eight', genre:'fiction8', publish:1297, edition:2006
    },
    {
        title:'book nine', genre:'fiction9', publish:1298, edition:2007
    },
    {
        title:'book ten', genre:'fiction10', publish:1299, edition:2010
    },
]
let userBook = books.filter((bk)=>bk.title==="book eight")

 userBook = books.filter((bk)=>{
    return bk.publish>=1297 && bk.edition>=2007;
 })
console.log(userBook)

//use map method

const number=[1,2,3,4,5,6,7,8,9]
let newNum=number.map((num)=>num *10).map((num)=>num+2).filter((num)=>num>=50)
console.log(newNum)//52,62,72,82,92

//use reduce method

console.log("reduce method start")

const array1=[1,2,3,4,5]
const inVal=0;
const Result=array1.reduce((acc,current) => acc+current,inVal)
console.log(Result)


// second examples reduce method

const Mall=[1,2,3,4,5,6,6,7,8,9]
// const inVal1=0;
const totalValue=Mall.reduce((acc, current)=>{
    console.log(`acc:${acc} and current:${current}`)
    // console.log(acc)
    // console.log(current)
    return acc+current;
},0)
// document.write(`acc:${acc} and current:${current}`)
 document.write("total value are:"+totalValue)
console.log(totalValue)


const shoppingCard=[
    {
        itemName:'js course',
        price:999
    },
    {
        itemName:'js course',
        price:999
    },
    {
        itemName:'js course',
        price:99349
    },
    {
        itemName:'js course',
        price:9990
    },
    {
        itemName:'js course',
        price:2345
    }
]

const totalPrice=shoppingCard.reduce((acc,item)=>{
   return acc+item.price
},0)
document.write("total price of course:"+totalPrice)
console.log(totalPrice)
