import { React, useState } from "react";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo.js";
import "./TodoList.css";

const TodoList = () => {
    const INITAL_STATE = [];

    const [todos, setTodos] = useState(INITAL_STATE);

    const addTodo = todo => {
        setTodos(todos => [...todos, todo]);
    };

    const handleRemove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    let allTodos = todos.map(todo => {
        return (
          <ul>
            <Todo
              className="TodoList-Todo"
              id={todo.id}
              key={todo.id}
              text={todo.todo}
              handleRemove={handleRemove}
            />
          </ul>
        );
    })

    return (
        <div className="TodoList">
            <NewTodoForm className="TodoList-NewTodoForm" addTodo={addTodo} />
            <div className="TodoList-todos">
                {allTodos}
            </div>
        </div>
    )
}

export default TodoList;
