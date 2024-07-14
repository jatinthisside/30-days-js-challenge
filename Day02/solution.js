// Day 2 : Operators

// Activity 1 : Arithmetic Operators
// javascript provide diffrent arrithmetic operators like (+,-,/,%) to perform arithmetic operations between operands
// here operands can be value, variable etc...
// Task1 > Write program to add two numbers and log the result to the console
// for this lets create two variable a and b using  let
 let a = 20;
 let b = 10;
 console.log(a+b)  // '+' is arrithmetic operator used for performing addition operation between operands
// Task2 > Write program to substract two numbers and log the result to the console
// for further operations we will use variable a and b we declared before
 console.log(a-b); // '-' is arrithmetic operator used for performing substration operation between operands
 // Task3 > Write program to multiply two numbers and log the result to the console
// for further operations we will use variable a and b we declared before
console.log(a*b); // '*' is arrithmetic operator used for performing multiplication operation between operands
// Task4 > Write program to divide two numbers and log the result to the console
// for further operations we will use variable a and b we declared before
console.log(a/b); // '/' is arrithmetic operator used for performing division operation between operands
// Task5 > Write program to find remainder when one number is divided to other and log the result to the console
// for further operations we will use variable a and b we declared before
console.log(a%b); // '%' is arrithmetic operator used for getting remainder after division operation between operands


// Activity 2 : Assignment Operators
// Task6 > use += operator to add a number to a variable and log the result to the console
let x = 10;
x+=10;
console.log(x);
// Task7 > use -= operator to substract a number to a variable and log the result to the console
let z = 10;
z-=5;
console.log(z);
// What do you mean by x+=10
// we know that curent value of x is 10 - x=10
// when i write x+=10, i am saying that add(x + 10 ) which is 20 then reassign x( x = 20)



// Activity 3 : Comparison Operators
// Task8 > write a program to compare two numbers using > and < and log the result to the console
   console.log(10>20); // false
   console.log(10<20); // true
// Task9 > write a program to compare two numbers using >= and <= and log the result to the console
  console.log(10>=10); // true
  console.log(10<10);  // false
// Task10 > write a program to compare two numbers using == and === and log the result to the console
  console.log(10=='10'); // true
  console.log(10==='10');  // false
// '=='  only compare values while '===' compares value + datatype


//Activity 4 : Logical Operators
// Task11 > write a program that uses the && operator to combine two conditions and log the result to the console
  let age = 19;
  console.log(age > 18 && age < 20); // && operator only evaluates to true if both conditions are true
// Task12 > write a program that uses the || operator to combine two conditions and log the result to the console  
  console.log(age===19 || age > 20); // || operator only evaluates to true if any of the conditions is true
// Task13 > write a program that uses the ! operator to negate a condition and log the result to console
  console.log(age === 19) // we know this statement will print true
//   but if we add ! sign at the starting of the statement, value will be opposite 
 console.log(!(age===19)) //false
 console.log(!true) //false
 console.log(!false) // true


//Activity 5 : Ternary Operators
// Task14 > write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console  
//  syntax : (condition) ? (true-case) : (fasle-case)
   age = -10;
   let test = age  >= 0  ? 'positive' : 'negative';
   console.log(test);

