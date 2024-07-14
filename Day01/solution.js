console.log("Hello World!");

// Day-1 : Variables and DataTypes 

// Activity 1: Variable Declaration
// task1 > declare a variable using var, assign it a number, and log the value to the console
  var num = 10;   //in javascript we can use var, let or const keyword to declare a variable
  console.log(num);    // using console.log() you can print a message or variable data to the console, it similar to printf in c and cout in c++
// task2 > declare a variable using let, assign it a string, and log the value to the console
  let str = "heythere";
  console.log(str); //JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution



// Activity 2: Constant Declaration
// task3 > declare a variable using const, assign it a boolean value, and log the value to the console
   const isTrue = true;
   console.log(isTrue); // diffrent between variable decalred using (let,var) and const is that value of const variable cannot be changed



// Activity 3: Data Types
// task4 > create variables of diffrent data types (number, string, boolean, object, array) and log each variables value and type using typeof operator
   let num1 = 10;
   console.log(num, typeof(num));
   let str1 = "abc";
   console.log(str1, typeof(str1));
   let bool = true;
   console.log(bool, typeof(bool));
   let obj={
     name:'Jatin',
     class:'MCA'
   }
   console.log(obj, typeof(obj));
   let arr = ['MCA','BCA','BTECH'];
   console.log(arr, typeof(arr));  // typeof(arr) is returning object 
//Q1) Why an array is an object in JavaScript?
// ans:-in javascript all derived data type is always a type object. Included functions and array



// Activity 4 : Reasigning Variables
// task 5 > declare a variable using let, assign it an initial value, reassign a new value and log both value to the console
   let a = 10;
   console.log(a);  //10
   a = 30;
   console.log(a);  //30
   // we can reassign a variable declared using let keyword


// Activity 5 : Understanding const
// task6 > try reassigning a variable declared using const observe the error
   const x = 30;
   x = 20;  // Error < TypeError: Assignment to constant variable.


// (Feature Request) 

