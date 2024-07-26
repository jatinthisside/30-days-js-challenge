// Day - 13 : Modules

// Activity 1 : Crearing And Exporting Modules
// Task1> Create a module that exports a function to add two numbers, import and use this module in another script.
export const addTwo=(a,b)=>{
    return (a+b);
 } //Consuming this method in './module.js'
//  Task2> Create a module that exports an object representing a person with properties and methods. import and use this module in another script.
export const Person ={
    name:"Jatin",
    age:22,
    degree:"MCA",
    greet:function(){
        console.log(`Hello i am ${this.name}`);
    }
}


// Activity 2 : Named and default exports
// Task3> Create a module that exports multiple functions using named exports. import and use these functions in another script.
export const mul = (a,b) => { //named export
    return (a*b);
}
export const sub = (a,b) => { //named export
    return (a-b);
}
// Task4> Create a module that exports a single function using default export. import and use this function in another script.
const divi=(a,b)=>{
    return (a/b);
}
export default divi;


// Activity 3 : Importing entire module
// Task5> Create a module that exports multiple constraints and functions. import entire module as and object in another script and use its property.
// lets try to import entire solution.js file in module.js 


// Activity 4 : Using Third Party Modules
// Task6> install a third party module (eg..lodash) using npm. import and use a function from this module in script.
// our ,main file is module.js so it would be better to write code there..
// Task7> install a third party module (eg..axios) using npm. import and use this module to make a network request in a script.
// our ,main file is module.js so it would be better to write code there..


// Activity 5 : Module Bundeling (Optional)
// Task8> Use a module bundler like webpack or parcel to bundle multiple js modules into a single file. write a script ro demostrate the bundling process.
