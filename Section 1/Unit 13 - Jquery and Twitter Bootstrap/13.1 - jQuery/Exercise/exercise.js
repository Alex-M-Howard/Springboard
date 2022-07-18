// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(() => { console.log('Lets get ready to party with jQuery!') });

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

// Remove the last paragraph in the article.
$('p').last().remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size', (Math.ceil(Math.random() * 100)))

// Add an item to the list; it can say whatever you want.
$('<li>Check Me Out!</li>').appendTo($('ol'))

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty().text('We apologize for having a list here before. This isn\'t even a great website.')

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
let r = $('input').get(0); 
let g = $('input').get(1);
let b = $('input').get(2);
console.log(r, g, b)
$('body').css('background-color', `rgb(${r.value},${g.value},${b.value})`)

// Add an event listener so that when you click on the image, it is removed from the DOM.
 $("img").on('click', function (e) {
      $(e.target).remove();
    });
