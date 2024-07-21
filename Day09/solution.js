// Day - 9 : DOM Manipulation

// Activity 1 : Selecting and manipuating elements
// Task1> Select an html element by its ID and change its text content.
document.getElementById('name').innerText="Jatin";
// Task2> Select an html element by its class and change its background color.
document.querySelector('.container').style.backgroundColor="orange"


// Activity 2 : Creating and Appending Elements
// Task3> Create a new div element with some text content and append it to the body.
const div = document.createElement('div');
const content = document.createTextNode(`Hello this is new div`);
div.appendChild(content);
document.body.appendChild(div);
// Task4> Create a new li element and add it to and existing ul list.
const li = document.createElement('li');
const text = document.createTextNode("Item-2");
li.classList.add('list-item');
li.appendChild(text);
document.getElementById('mylist').appendChild(li);


// Activity 3 : Removing Elements
// Task5> Select a html element and remove it from the DOM.
document.querySelector('.list-item').remove();
// Task6> Remove the last child of a specific html element
const select = document.querySelector('.parentNode');
select.removeChild(select.children[select.children.length - 1]);


// Activity 4 : Modifying attributes and classes
// Task7> Select an html element and change one of its attributes (e.g src of an image tag)
document.getElementById('imgTag').src=`./image.png`;
// Task8> Add and remove a css class to/from an HTML element.
// lets remove image
document.getElementById('imgTag').classList.add('hidden');
// lets get it back
document.getElementById('imgTag').classList.remove('hidden');


// Activity 5 : Event Handling
// Task9> Add a click event listener to a button that changes text content of a paragraph.
const myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click',ChangeParaHandler);
function ChangeParaHandler(){
    document.getElementById('para').innerText = 'Changed Paragrah...'
}
// Task10> Add a mouseover event listener to an element that changes its border color.
const btn=document.getElementById('borderChange');
btn.addEventListener('mouseover',changeBorderColor);
function changeBorderColor(){
    btn.style.borderColor="blue"
}
