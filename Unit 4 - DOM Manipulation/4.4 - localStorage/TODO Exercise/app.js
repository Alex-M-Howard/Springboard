/*
JS Todos Exercise
Part 1

As a user, you should be able to:                   
Add a new todo (by submitting a form) - DONE                    //Completed
Mark a todo as completed (cross out the text of the todo)       //Completed
Remove a todo                                                   //Completed

Part 2
Now that you have a functioning todo app, save your todos in 
localStorage! Make sure that when the page refreshes, the todos //Completed
on the page remain there.
*/
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    const ul = document.querySelector("ul");

    function createListElement(text) {
        const newLi = document.createElement("li");
        const remove = document.createElement("button");
        newLi.innerText = text;
        newLi.classList.add("todo");
        remove.innerText = "remove";
        remove.classList.add("remove");
        newLi.append(remove);
        ul.append(newLi);
    }

    function loadFromStorage() {
        const stored = JSON.parse(localStorage.todo)

        for (item in stored) {
            createListElement(item)
            if (stored[item] === 'todo done') {
                ul.lastChild.classList.toggle("done")  
            }
        }

    }

    function saveToStorage() {
        localStorage.clear()
        const listItems = document.querySelectorAll(".remove");
        const store = {};

        for (let item of listItems) {
            const key = item.parentElement.innerText.replace('remove', '')
            store[key] = item.parentElement.classList.value
        }
        
        localStorage.setItem("todo", JSON.stringify(store));
    }

    loadFromStorage()

    button.addEventListener('click', function (event) {
        event.preventDefault();
        const input = document.querySelector('input');

        if (input.value) {            
            createListElement(input.value)
            input.value = '';
            saveToStorage();
        }
    })

    ul.addEventListener("click", function (event) {
            event.preventDefault();
        if (event.target.tagName === "BUTTON") {
            event.target.parentElement.remove();
        } else if (event.target.tagName === "LI") {
            let listItem = event.target;
            listItem.classList.toggle("done");
        }    

        saveToStorage();
    })
})