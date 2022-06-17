/*
JS Todos Exercise
Part 1
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo


Part 2
Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.

*/



document.addEventListener('DOMContentLoaded', function () {

//Add code here
    const button = document.querySelector('button');

    button.addEventListener('click', function (event) {
        event.preventDefault()
        const input = document.querySelector('input');

        if (input.value) {
            console.log(input.value)
            
            const ul = document.querySelector("ul");
            const newLi = document.createElement("li");            
            newLi.innerText = input.value;
            newLi.classList.add("todo")


            
            ul.append(newLi);
            input.value = ''
        }


    })





})