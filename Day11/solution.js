// Day - 11 : Promises and Async/Await

// Activity 1: Understanding Promises
// Task1>  Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const PromiseOne = new Promise(function(resolve) {
    console.log("Task - 1");
     setTimeout(function() {
        console.log("Task - 2");
        resolve("Promise Resolved!");
     },2000)
     console.log("Task - 3");
})
PromiseOne.then((msg)=>{
    console.log(msg);
})
// Task2> Create a promise that rejects with an error msg after a 2 sec timeout and handle the error using catch.
const PromiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject("Promise Rejected!");
    },2000)
});
PromiseTwo.catch((err)=>{
    console.log(err);
})


// Activity 2: Chaining Promises
// Task3> Create a sequence of promises that simulate fetching data froma server. chain the promises to log messages in a specific order.
const p1 = new Promise(function(resolve, reject) {
    console.log("Fetching data from server...");
    setTimeout(()=>{
        resolve({name:"jatin",age:22});
    },4000)
})

p1.then((value)=>{
    console.log("We are almost done...");
        return new Promise((resolve, reject)=>{
             resolve(value);
        })
  
}).then((value)=>{
    console.log("Data fetched succesfully!");
    console.log(value);
})



// Activity 3 : Using Async/Await
// Task4> Write an async function that waits for a promise to resolve and then logs the resolved value
const getData=async()=>{
    const p1 = new  Promise(function(resolve, reject){
        setTimeout(() => {
            resolve();
        }, 4000);
    })
    await p1.then(()=>{
        console.log('Promise resolved successfully!');
    })
    console.log('After Promise!');
}
getData();
// Task5> Write an async function that handles a rejected promise using try-catch and logs the error message.
function getRejectedPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject(new Error("Something went wrong!"));
        },3000)
    })
}

async function handleRejectedPromise(){
    try{
        const result = await getRejectedPromise();
        console.log(result);
    }catch(e){
        console.log("caught an error ->",e.message);
    }
}

handleRejectedPromise();



// Activity 4 : Fetching data from api
// Task6> Use a fetch api to get data from a public api and log the responce data to the console using promise.
const getDataFromApi=()=>{
     fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
        console.log('data received!');
        console.log(data)
    }).catch(()=>{
        console.log('Failed to fetch');
    })
}
// getDataFromApi();s
// Task7> Use a fetch api to get data from a public api and log the responce data to the console using async/await.
const getDataFromApi2 = async()=>{
    console.log('{{{{ Get data from api 2 }}}}')
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonData = await res.json();
        console.log(jsonData);
    }catch(err){
        console.log("}}}}Error while fething data !{{{{");
    }
}
getDataFromApi2();


// Activity 5 : Concurrent Promises
// Task8> Use a promise.all to wait for multiple promises to resolve and then log all their values.
// Example functions that return promises
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise1");
        }, 1000);
    });
}

function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise2");
        }, 2000);
    });
}

function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise3");
        }, 1500);
    });
}

// Async function that waits for multiple promises to resolve using Promise.all
async function handleMultiplePromises() {
    try {
        const results = await Promise.all([promise1(), promise2(), promise3()]);
        console.log("All promises resolved:", results);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Call the async function
handleMultiplePromises();
// Task9> Use promise.race to log the value of the first promise that resolves among multiple promises.
// Example functions that return promises
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise1");
        }, 3000); // Resolves in 3 seconds
    });
}

function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise2");
        }, 2000); // Resolves in 2 seconds
    });
}

function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from promise3");
        }, 1000); // Resolves in 1 second
    });
}

// Async function that waits for the first promise to resolve using Promise.race
async function handleFirstResolvedPromise() {
    try {
        const result = await Promise.race([promise1(), promise2(), promise3()]);
        console.log("First promise resolved:", result);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Call the async function
handleFirstResolvedPromise();

