//DOM - Document object model
/*
programming interface for html

Browser loads content, then creates the DOM for each page which allows
interaction. 


The strutcture of DOM uses a tree, where topmost node is the document object
Similar to chrome's inspect tabbed version of the html document
The document is the 'root' and is the top of the tree.

Things we can do with document object:
*finding elements
*make new elements
*updating elements
*change properties on elements
*listening for events


try typing document into the console of a webpage. 
use console.dir(document) and you'll be able to explore like a json



Lets find an element:
we can select elements different ways using javascript

*getElementById
-accepts a string which is a name of an id. Should only be one id, but if there are more than one, returns first one
document.getElementById('title'); - type this into console 
will return an OBJECT

we can save it too
let title = document.getElementById('title');


Thees objects are special - called HTMLElement

We don't always have an id. We can grab by tag name
getElementsByTagName  //Notice the s at the end of element

document.getElementsByTagName('h1')
document.getElementsByTagName('div')

These objects look like they contain arrays, but they can't use most array methods


We can also select by getElementsByClassName to use the class


The most useful method to find elements:
querySelector - accepts a string wihich is a valid CSS selector

document.querySelector("#main");  - this gets elements with id of main
document.querySelector("h2.section-heading"); - gets even more specific
querySelectorAll will return all matches, the others only the first!

console.dir(document.querySelector('#gallery'));
Selecting by attribute possible too
document.querySelector('input[type="text"]') need to look at selectors heavier

fancier. An hr that is direct descendant of body
document.querySelectorAll('body > hr')
Maybe revisit diner exercise!


We can use these in variable and serach in them!
let form = document.querySelector('form');
form.querySelector('btn'); -> will search just the form section for a buttoN!
*/

