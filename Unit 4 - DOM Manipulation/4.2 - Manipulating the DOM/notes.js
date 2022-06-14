const ol = document.getElementsByTagName('ol')[0];

console.log(ol.innerText);

const i = document.querySelector('i');
const caps = i.innerText.toUpperCase();

i.innerText = caps;

//Using TextContent!
/* same concept as innerText*/

const quote = document.getElementsByTagName('blockquote');
console.log(quote[0].innerText);

quote[0].innerText = 'This quote is gangsta...';
console.log(quote[0].innerText);

const selection = document.querySelector('#music');
console.log(selection.innerText);
console.log(selection.textContent); // Gets all of text inside of elements

/* innerText is aware of what is showing on screen, textContent will show everything
even if you have it hidden by css
*/

//innerHTML will return all elements inside the object.
const paragraph = document.querySelector('p');
console.log(paragraph.innerHTML);

paragraph.innerHTML = '<h1>WHAT</h1>';
console.log(paragraph.innerHTML);

//Modifying styling
paragraph.style.backgroundColor = 'red'; //Remember camelcase!

//modifying multiple stylings at once!
//const allPs = document.querySelectorAll - Would return a nodelist
//We must loop!
const allPs = document.querySelectorAll('p');
for (let paras of allPs) {
	paras.style.backgroundColor = 'blue';
	paras.style.fontSize = '1.25rem';
}

const images = document.querySelectorAll('img');
for (let all of images) {
	//Biggest thing to remember is that it changes have to be a string!
	all.style.width = '100px';
}

//Modifying attributes in HTML elements
/* attributes:
*src
*href
*class
*id
*type
*value
*/

//getAttribute

const imgs = document.querySelectorAll('img');

for (img of imgs) { 
    console.log(img.getAttribute('src'));
}

//You can set attributes too
const input = document.querySelector('input')
input.setAttribute('type', 'checkbox');


let source = imgs[0].getAttribute('src')
for (img of imgs) {
    img.setAttribute('src', source);
}

//We can change classes too
quote[0].setAttribute('class', 'section-title')


//direct attribute access
//use dot notation and grab directly

const form = document.querySelector('#muffin-form');
form.id = 'Now-what'
console.log(form.id);

//Value is most common you'll use
const input2 = document.querySelector('form input')
input.setAttribute('type', 'input');
input2.value = '5'


//manipulating classes

