// Day - 5 : Functions

// Activity 1 : Function Declaration
// Task1> Write a function to check if a number is even or odd and log the result to the console.
function EvenOdd(num){
   if(num%2==0)
      console.log("Even");
    else
       console.log("Odd");
}

EvenOdd(23);
// Task2> Write a function to calculate square of a number and return the result.
function findSquare(num){
    return (num*num);
}
console.log(findSquare(4));



// Activity 2 : Function Expression
// The function keyword can be used to define a function inside an expression.
// Task3> Write a function expression to find the maximum of two numbers and log the result to the console.
const maxNum = function(num1,num2) {
    console.log("finding max of two numbers..");
    return ((num1>num2) ? num1 : num2);
}
console.log(maxNum(10,22));
// Task4 > Write a function expression to concatinate two strings and return the result.
const addStrings = function(str1, str2) {
    return (str1 + " " + str2);
}
console.log(addStrings("Hello","World!"));



// Activity 3 : Arrow Functions
// Task5> Write an arrow function to calculate sum of two numbers and return the result.
const sumOfTwo=(num1,num2)=>{
    return (num1+num2);
}
console.log("sum of two numbers : ",sumOfTwo(10,15));
// Task6> Write an arrow function to check if a string contains a specific character and return a boolean value.
// There are two ways to do this
// 1) By Built in string method
// 2) By Brute Force
// Method - 1
const isContain = (char,str) =>{
    return ((str.includes(char)) ? true : false);
}
// Method - 2
const isContain2 = (char,str) =>{
    for(let i = 0;i<str.length;i++){
        if(str[i]==char){
           return true;
        }
    }
    return false;
}
console.log(isContain2('i',"jatin"));



//Activity 4 : Function Parameters and Default Values
// Task7> Write a function that takes two parameters and return their product. Provide a default value for the second parameter.
const Product = (num1,num2=1) =>{
    return (num1*num2);
}  
console.log(Product(2));
// Task8> Write a function that takes a persons name and age and returns a greeting message. Provide a default value for age. 
const Greet = (name,age=18) =>{
    return `Hello ${name} your age is ${age}`;
}
console.log(Greet('Jatin','22'));



// Activity 5 : Higher Order Functions
// What is a Higher Order Function? A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
// Task9> Write a higher order function that takes a function and a number, and call the function that many time.
function func(){
    console.log("I am func");
}
const highOrder = (func,num) =>{
     while(num>0){
        func();
        num--;
     }
}
highOrder(func,3);
// Task10> Write a higher order function that takes two functionsa and a value, applies the first function to the value, the then applies the second function to the result.
const highOrderFunction = (func1,func2,value) =>{

}
