import React from "react";
import "./Todo.css";

const Todo = ({
    id,
    key,
    text,
    handleRemove,
}) => {
  const remove = () => handleRemove(id);

  return (
      <li className="Todo" key={key}>
          {text}
      <button className="Todo-Remove " onClick={remove}>
        X
      </button>
    </li>
  );
};

export default Todo;