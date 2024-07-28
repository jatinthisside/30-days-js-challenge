// Day - 15 : Closure

// Activity 1 : Understanding Closure
// Task1> Write a function that return another function, where an inner function accesses a variable from outer function's scope. call the inner function and log the result.
function Outer(){
    let name = "Jatin";
    return function Inner(){
        console.log(name);
    }
}
const InnerFunc = Outer();
InnerFunc();
// Task2> Create a closure that maintains a private counter. implement functions to increment and get the current value of the counter.
function Counter(){
    let counter=0;
    return{
        increment: function(){
            counter++;
        },
        getValue: function(){
            return counter;
        }
    }
}
const CouterFunc = Counter();
const {increment,getValue} = CouterFunc;
console.log(getValue());
increment();
console.log(getValue());


// Activity 2 : Practical Closure
// Task3> write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function IdGenerator(){
    let lastId = 0;
    return function(){
        lastId++;
        return lastId;
    }
}
const generateId = IdGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());
// Task4> Create a closure that captures a users name and returns a function that greets a user by name.
function User(n){
    let name = n;
    return function(){
        console.log(`Hello ${name}`);
    } 
}
const greet = User("Jatin");
greet();


// Activity 3 : Closures in Loops
// Task5> Write a loop that creates an array of functions. Each Function Should log its index when called. Use a closure to ensure each function logs the currect index.
let arr=[];
for(let i = 0; i <5;i++){
    function mainFunc(){
       let index = i;
       function check(){
          if(index !== i)
               return;
       }
       check();
       console.log("Index : ",index);
    }
    arr.push(mainFunc);
}
arr[0]();


// Activity 4 : Module Pattern
// Task6> Use closure to create a simple module for managing a collection of items. implement methods to add, remove and list items.
function createItemManager() {
    let items = []; 
    return {
        addItem: function(item) {
            items.push(item);
            console.log(`Item added: ${item}`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`Item removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        listItems: function() {
            console.log("Current items:", items);
        }
    };
}
const itemManager = createItemManager();
itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.listItems();  
itemManager.removeItem('Apple');
itemManager.listItems(); 
itemManager.removeItem('Grapes');  


// Activity 5 : Memoization
// Task7> Write a function that memorizes the result of another function. Use a closure to store the results of previous computations.
// Task8> Create a memorized version of a function that calculates the factorial of a number.
