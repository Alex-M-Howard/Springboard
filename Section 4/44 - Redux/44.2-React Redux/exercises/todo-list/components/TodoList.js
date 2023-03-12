import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}

export default TodoList;
