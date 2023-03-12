import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../config/rootReducer";
import uuid4 from "uuid4";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        text: text,
        completed: false,
        id: uuid4()
      })
    );
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
