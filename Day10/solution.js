// Day - 10 : Event Handling

// Activity 1 : Basic Event Handling
// Task1> Add a click event listener to a button that changes the text content of a paragraph
const para = document.getElementById('para');
const btn = document.getElementById('btn');
const changeParagraph = () =>{
    para.innerText = "Paragraph changed ! (new para)";
}
btn.addEventListener('click',changeParagraph);
// Task2> Add a double click event listener to an image that toggles its visibility.
const img = document.getElementById('img');
const toggleImage = () =>{
    if(img.classList.contains('hidden'))
        img.classList.remove('hidden');
    else
       img.classList.add('hidden');
}
img.addEventListener('dblclick',toggleImage);



// Activity 2 : Mouse Events
// Task3> Add a mouseover event listener to an element that changes its background color.
const element = document.querySelector('#element');
console.log('element->',element);
element.addEventListener('mouseover',()=>{
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
})
// Task4> Add a mouseout event listener to an element that resets its background color
element.addEventListener('mouseout',()=>{
    element.style.backgroundColor="";
    element.style.color="black";
})



// Activity 3 : Keyboard Events
// Task5> Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById('input');
input.addEventListener('keydown',(e)=>{
    console.log(e.key);
})
// Task6> Add a keyup event listener to an input field that displays the current value in paragraph.
const Paragraph = document.getElementById('Paragraph');
input.addEventListener('keyup',(e)=>{
    console.log(e);
    Paragraph.innerText = e.key
})



// Activity 4 : Form Events
// Task7> Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputField = document.getElementById('input');
    const inputValue = inputField.value;
    console.log(inputValue);
})
// Task8> Add a chnage event listener to a select dropdown that display the selected value in a paragraph.
    const dropdown = document.getElementById('dropdown');
    const paragraph = document.getElementById('selectedValue');
    dropdown.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        paragraph.textContent = `Selected value: ${selectedValue}`;
    });



// Activity 5 : Event Delegation
// Task9> Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.getElementById('ul');
ul.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        console.log(e.target.innerText);
    }
})
// Task10> Add an event listener to a parent element that listens for events from dynamically added child element
// Same code for event handler
// adding dynamic element
const li = document.createElement('li');
const text = document.createTextNode('item-n');
li.appendChild(text);
ul.appendChild(li);
