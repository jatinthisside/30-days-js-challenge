// Day - 6 : Arrays

// Activity 1 : Array creation and access
// Task1> Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1,2,3,4,5];
console.log(arr);
// Task2> Access the first and last elements of the array and log them to the console.
console.log('first -> ',arr[0],' last -> ',arr[arr.length - 1]);


// Activity 2 : Array Methods (Basics)
// Task3> Use the push method to add new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr);
// Task4> Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);
// Task5> Use the shift method to remove the first element from the array and log the updated array
arr.shift();
console.log(arr);
// Task6> Use the unshift method to add a new number to the beggining of array and log the updated array.
arr.unshift(9);
console.log(arr);


// Activity 3 : Array Methods (Intermediate)
// Task7> Use the map method to craete a new array where each number is doubled and log the new array; 
const newArr = arr.map((element,index)=>{
    return element * 2;
})
console.log('old arr -> ',arr);
console.log('new arr -> ',newArr);
// Task8> Use the filter method to create a new arry with only even numbers and log the new arry
const evenArray = arr.filter((element,index)=>{
    return element % 2 === 0;
})
console.log('even array -> ',evenArray);
// Task9> Use the reduce method to calculate sum of all numbers in the array and log the result.
const sumArray = arr.reduce((total,currentVal,index,arr)=>{
    return total += currentVal;
})
console.log('sum array -> ',sumArray);


// Activity 4 : Array Iteration
// Task10> Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<=arr.length-1;i++){
    console.log("Element : ",i," ",arr[i]);
}
// Task11> Use the forEach method to iterate over the array and log each element to the console
arr.forEach((current,index)=>{
    console.log("Element : ",index," : ",current);
})



// Activity 5 : Multi-dimensional Arrays
// Task12> Create a two dimensional array(matrix) and log the entire array to the console
const matrix = [[1,5,3],[3,2,1],[1,2,3]];
console.log(matrix);
// Task13> log and access a specific element from the two dimensional array.
// lets access row = 1, col = 2 element means second element which is 5
console.log(matrix[0][1]);
