// Day - 4 : Loops

// Activity 1 : For Loop
// Task1> Write a program to print numbers from 1 to 10 using a for loop
for(let i = 1; i<=10;i++){
    console.log(i + " ");
}
// Task2> Write a program to print the multiplication table of 5 using a for loop
for(let i=1;i<=10;i++){
    console.log("5 * ",i," = ",5*i);
}



// Activity 2 : While Loop
// Task3> Write a program to calculate the sum of numbers from 1 to 10 using while loop
let i = 1;
let sum = 0;
while(i<=10){
    sum+=i;
    i++;
}
console.log("sum : ",sum);
// Task4> Write a program to print numbers from 10 to 1 using a while loop
i = 10;
while(i>=1){
    console.log(i);
    i--;
}




//Activity 3 : Do...While Loop
// Task5> Write a program to print numbers from 1 to 5 using a do...while loop.
i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);
// Task6> Write a program to calculate the factorial of number using do...while loop.
let num = 9;
i = 1;
let fact = 1;
do{
    fact = fact * i;
    i++;
    num--;
}while(num>0);
console.log('Fact -> ',fact);



// Activity 4 : Nested Loops
// Task7> Write a program to print a pattern using nested for loops
// for(let i=1; i<=5;i++){
//     console.log(" * ".repeat(i));
// } //Without Nested Loops

// With Nested Loop
for(let i=1; i<=5; i++){
    let row_output="";
    for(let j=1; j<=i; j++){
        row_output += "*     ";
    }
    console.log(row_output);
    console.log("\n")
}



// Activity 5 : Loop Control Statements
// Task8> Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i = 1; i<=10; i++){
    if(i===5)
        continue;
    console.log(i);
}
// Task9> Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i = 1; i<=10; i++){
    if(i===7)
         break;
    console.log(i);    
}
