//Write the code necessary to do the following:

// Select the section with an id of container without using querySelector.
const container = document.getElementById('container');

// Select the section with an id of container using querySelector.
const container2 = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const list = document.getElementsByClassName('second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.
const sectionContainer = document.querySelector('#container');
    //sectionContainer.innerText = 'Hello!';  commented out for later question


// Add the class main to the div with a class of footer.
const div = document.querySelector('.footer');
div.classList.add('main');
//div.setAttribute('class', 'main-footer')   //This is the way I originally did it before remembering there was an add and remove

// Remove the class main on the div with a class of footer.
div.setAttribute('class', 'footer');

// Create a new li element.
const li = document.createElement('li');

// Give the li the text “four”.
li.innerText = 'four';

//Append the li to the ul element.   Side note: this took me way longer than I would have liked to realize I needed to comment out lines 17 above
let ul = document.querySelector('ul'); 
ul.appendChild(li)

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = document.querySelectorAll('ol')
for (let element of ol) {
    element.style.backgroundColor = 'green'
}
// Remove the div with a class of footer
div.remove()

