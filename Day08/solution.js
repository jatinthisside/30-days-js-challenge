// Day - 8 : ES6+ Features 

// Activity 1 : Template Literals
// Task1> Use template literals to create a string that includes variables for a person's name and age, and log string to the console.
const Person = {
    name:"Jatin",
    age:"23"
}
let str = `Hello ${Person.name} Your Age Is ${Person.age}`;
console.log(str);
// Task2> Create a multiline string using template literals and log it to the console.
let multilineStr = 
`Hello My Name is Jatin
 - I am from Chhattishgarh,
 - I am Pursuing MCA
`;
console.log(multilineStr);


// Activity 2 : Destructuring
// Task3> Use array destructuring to extract first and second elements from an array of numbers and log them to console.
const arr = [1,2,3,4];
const [first,second] = arr; 
console.log(first,second);
// Task4> Use object destructuring to extract the title and author from book object and log them to console.
const Book = {
    title:"Shoe Dog",
    author:"Phil Knight"
}
const {title, author} = Book;
console.log(title,"-", author);


// Activity 3 : Spread and Rest Operators
// Task5> Use the spread operator to create a new array that includes all elements of an existing array  plus additional elements, and log the new array to the console.
const OldArray = ["C","C++","Java"];
const NewArray = [...OldArray,"JS","Python"];
console.log(NewArray);
// Task6> Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.
function func(...rest){
    let total = rest.reduce((total,currentValue)=>{
         return total += currentValue;
    })
    return total;
}
const sum = func(1,2,3,4,5);
console.log(sum);


// Activity 4 : Default Parameters
// Task7> Write a function that takes two parameters and return their product, with the second parameter having default value of 1. log the result of calling this function with and without the second parameter.
const product = (num1,num2=1) =>{
    return num1*num2;
}
console.log('Without 2nd parameter : ',product(2));
console.log('With 2nd parameter : ',product(2,4));


// Activity 5 : Enhanced Object Literals
// Task8> Use enhanced object literals to create object with methods and properties, and log the object to the console.
// Read about Enhanced Object Literal ---> https://blog.webdevsimplified.com/2021-02/javascript-enhanced-object-literals/
let MyName = "Jatin";
let Age = 23;
const obj = {
    MyName,
    Age,
    hi(){
        return `hi ${this.name}`
    }
};
console.log(obj);
// Task9> Create an object with computer property names based on variables and log the object to the console.
let id = 1;
const Human = {
    [MyName] : "Peter",
    ["Age"+id]:23,
}
console.log(Human);
