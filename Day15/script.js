//closures
//understanding closures

var sum=(a)=>{
 console.log("hello viewers "+a)
 var c=3;
 return function(){
    return a+b+caches;
 }
}
 var store=sum(3);
 console.log(store(5))


var sum1=function(m,n,o)
{
    return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
var store1=sum1(3,4,5);
console.log(store1.getSumTwo());
console.log(store1.getSumThree())
