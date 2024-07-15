// Day03 - Control Structures 

// Activity 1: If else statement
// Task1 > write a program to check if a number is positive, negative, or zero, and log the result to the console.
   let num = 10;
   // in javascript we can use if else statments for conditional operations
   if(num>0){ //if num is greater than 0 print Positive
    console.log('Positive');
   }else if(num<0){  //else if num is lesser than 0 print Negative
    console.log('Negative');
   }else{ // if both above conditions become false print Zero
    console.log('Zero');
   }
// Task2 > write a program to check if a person is eligible to vote (age>=18), and log the result to the console.
   let age = 19;
   if(age>=18){
     console.log('Person is eligible to vote!');
   }else{
     console.log('Person is not eligible to vote!');
   }



// Activity 2: Nested if else statements
// Task3 > write a program to find the largest of three numbers using nested if else statements
  let n1 = 10;
  let n2 = 5;
  let n3 = 10;
  if(n1>n2){
    if(n1>n3){
         console.log('n1 is greatest -> ',n1);
    }else{
         console.log('n3 is greatest -> ',n3);
    }
  }else{
    if(n2>n3){
        console.log('n2 is greatest -> ',n2);
    }else{
        console.log('n3 is greatest -> ',n3);
    }
  }
  // In Above Example Equalto case is not handled


// Activity 3 : Switch Case
// Task4> Write a program that uses switch case to determine the day of the week based on number (1-7) and log the day name to console
   const day = 3;
   switch(day){
    case 1: 
      console.log('Sunday');
      break;
    case 2: 
      console.log('Monday');
      break;
    case 3: 
      console.log('Tuesday');
      break;
    case 4: 
      console.log('Wednesday');
      break;
    case 5: 
      console.log('Thursday');
      break;
    case 6: 
      console.log('Friday');
      break;
    case 7: 
      console.log('Saturday');
      break;   
    default:
        console.log('Num from 0 - 7 is valid only!')   
   }
// Task5> write a program that uses switch case to assign a grade ('A','B','C','D','F') based on a score and log the result to console.
const score = 80;
   switch(true){
    case (score >= 80 && score <= 100): 
      console.log('A');
      break;
    case (score >= 70 && score < 80): 
      console.log('B');
      break;
    case (score >= 60 && score < 70): 
      console.log('C');
      break;
    case (score >= 45 && score < 60):  
      console.log('D');
      break;
    case (score < 45 ): 
      console.log('F');
      break;
    default:
        console.log('Not a valid score!');   
   }


// Activity 4 : Conditional (Ternary) Operator
// Task6> write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
 num = 30;
 const result = num%2==0 ? "even" : "odd";    
 console.log(result);


// Activity 5 : Combining Conditions
// Task7> write a program to check a number is leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) the log the result to the console.
let year = 1900;
if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
  console.log("Number is leap year");
}else{
  console.log("Number is not a leap year");
}
