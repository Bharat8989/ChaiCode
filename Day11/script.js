//promises and Async/Await

const promise =new Promise(function (resolve, reject){
    const string1= 'Bharat'
    const string2= "kadam"
    if(string1==string1){
        resolve();

    }
    else{
        reject();
    }
})
promise 
      .then(function(){
        console.log("promise resolved successfully")
      })
      .catch(function(){
        console.log("promise is rejected")

      })
      .finally(function(){
        console.log("promise is successfully run")
      })

// async functions 

const helperPromise= function(){
    const promise =new Promise(function(resolve,reject){
        const x='king'
        const y='king'
        if(x==y){
            resolve("string are same")

        }
        else{
            reject("string are not same")
        }
    })
    return promise;
}
async function demoPromise() {
    try{
        let message=await helperPromise();
        console.log(message)

    }
    catch(error){
        console.log("error:" +error)
    }
    finally {
        console.log("Execution completed");  // Code to execute after try and catch
    }
}
demoPromise()


const delayedMessage = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("This message is displayed after a 2-second delay");
        }, 2000);
    });
}

delayedMessage().then(function(message) {
    console.log(message);
});

//create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
// Create a promise that rejects after a 2-second timeout
const promise1 = new Promise((reject) => {
    setTimeout(() => {
      reject(new Error('Promise rejected after 2 seconds'));
    }, 2000);
  });
  
  // Handle the error using .catch()
  promise1
    .catch((error) => {
      console.error(error.message);
    });
  

    //fetching data from an api

    //use the fetch api to get data from a public api and log the response data to the console using async await