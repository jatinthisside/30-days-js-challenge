// Question - 1
import { addTwo } from "./solution.js";
console.log(addTwo(10,2));
// Question - 2
import { Person } from "./solution.js";
console.log(Person);
console.log(Person.greet());
// Question - 3
import {mul,sub} from "./solution.js";
console.log(mul(10,5));
console.log(sub(10,5));
// Question - 4
import division from "./solution.js";
console.log(division(10,2));
// Question - 5
import * as module from "./solution.js";
console.log(module);
// Question - 6
import _ from "lodash";
const arr = [1,2,3,4];
_.reverse(arr);
console.log(arr);
// Question - 7
import axios from "axios";
const getResponse =async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
}
getResponse();
