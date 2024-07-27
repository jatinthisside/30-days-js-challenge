// Day - 14 : Classes

// Activity 1 : Class Definition
// Task1> Define a class Person with property name and age, and a method to return a greeting message. create an instance of class and log the greeting message.
class Person{
    firstname = "Jatin"
    lastname = "Kumar"
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet = () =>{
        return `Welcome ${this.name}`;
    }
    // Task 2
    updateAge=(age) =>{
        this.age = age;
        return this.age;
    }
    // Task - 5 : Add static greeting method
    static Morning=()=>{
       return "Very Good Morning!";
    }
    // Task - 7 : Getter method
    get fullName() {
        return this.firstname + " " + this.lastname;
    }
    // Task - 8 : Setter method
    set fullName(fullName) {
        fullName = fullName.split(" ");
        this.firstname = fullName[0];
        this.lastname = fullName[1];
    }
} 
const PersonJatin = new Person("Jatin",20);
console.log(PersonJatin.greet());
// Task2> Add a method to Person class that updates the age property and logs the updated age.
console.log('updated age -> ',PersonJatin.updateAge(22));


// Activity 2 : Class Inheritance
// Task3> Define a class student that extends the Person class. Add a property studentId and a method to return the studentId. create an instance of Student class and log the studentId.
class Student extends Person {
    // Task6 - static property to track total nnumber of students created
    static totalStudents = 0;
    constructor(name,age,id){
        super(name,age);
        this.studentId = id;
        Student.totalStudents += 1;
    }
    getstudentId=()=>{
        return this.studentId;
    }
    // Task4 - overriding greet method
    greet=()=>{
        return `Welcome ${this.name} your student id is ${this.studentId}`;
    }
} 
const StudentJatin = new Student('Jatin',22,'01');
const StudentBanti = new Student('Banti',22,'02');
const StudentJay = new Student('Jay',22,'03');
console.log(StudentJatin.getstudentId());
// Task4> Override the greeting method in student class to include studentId in message. log the overridden greeting message.
console.log(StudentJatin.greet());


// Activity 3 : Static Method and Properties
// Task5> Add a static method to the Person class that returns a generic greeting message. call this static method without creating an instance of the class and log the message.
console.log(Person.Morning()); 
// Task6> Add a static property to the Student class to keep track of the number of students created. incrament this property in the constructor and log the total number of students created.
console.log(Student.totalStudents);


// Activity 4 : Getters and Setters
// Task7> Add a getter method to the Person class to return the full name (assume a firstname and lastname property). create an instance and log the fullname using the getter.
console.log(PersonJatin.fullName)
// Task8> Add a setter method to the Person class to update the name property (firstname,lastname) , Update the name using setter and log the updated full name.
PersonJatin.fullName = "Jatin Kumar"
console.log(PersonJatin.fullName);


// Activity 5 : Private Fields (Optional)
// Task9> Define a class account with private fields for balance and a method to deposit and withdraw money. ensure that the balance can only be updated through thsese methods.
// Task10> Create an instance of Account class and test the deposit and withdraw methods, logging the balance after each operation.
