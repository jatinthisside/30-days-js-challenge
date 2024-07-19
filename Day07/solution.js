// Day - 7 : Objects

// Activity 1 : Object creation and access
// Task1> Create an object representing a book with properties like title, author and year and log the object to the console.
const book = {
    title:"Deep Work",
    author:"Cal Newport",
    year:2015,
    message:function(){return book.title + " " + book.author},  //Task 3
    updateYear:function(year){
        this.year = year;
    },
    getTitleAndYear:function(){
        return this.title + " " + this.author  //Task 3
    }
} 
console.log("Printing obj --> " , book);
// Task2> Access and log the title and author properties of the book object.
console.log("Printing title of book --> " , book.title);
console.log("Printing title of book --> " , book.author);



// Activity 2 : Object Methods
// Task3> Add a method to the book object that returns a string with books title and author and log the result of calling this method.
// Update book object created before
console.log('method -> ',book.message());
// Task4> Add a method to the book object that takes a parameter (year) and updates the books's year property, then log the updated book object.
// Update book object created before
console.log("Printing book before updation -> ",book);
book.updateYear(2000);
console.log("Printing book after updation -> ",book);



// Activity 3 : Nested Objects
// Task5> Create a nested object representing a library with properties like name, books(array of book object) and log the liabrary object to the console.
// creating dummy book objects for passing to library
const book1={name:'Shoe Dog'};
const book2={name:'Rework'};
const book3={name:'One Thing'};
const book4={name:'Rich Dad Poor Dad'};
const library = {
    name:"National Library",
    books:[book1,book2,book3,book4]
}  
console.log("Library --> ",library);
// Task6> Access and log the name of the library and titles of all booksin the library.
console.log("Library -> ",library.name);
library.books.map((book)=>(
   console.log('book name -> ',book.name)
))



// Activity 4 : this Keyword
// Task7> Add a method to the book object that uses this keyword to return a string with the book's title and year, and log the result of calling this method.
// Update book object created before
console.log('method -> ',book.getTitleAndYear());



// Activity 5 : 
// Task8> Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log('--- for in loop ---');
for(x in book){
    console.log(x ," -> ", book[x]);
} 
// Task9> Use object.keys and object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book)); // return array of keys
console.log(Object.values(book)); // return array of values
