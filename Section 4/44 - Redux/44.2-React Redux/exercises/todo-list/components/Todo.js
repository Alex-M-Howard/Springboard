import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../config/rootReducer";

function Todo({ id, text }) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <div style={{ marginRight: "8px" }}>{text}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={handleRemoveClick}>
        X
      </div>
    </div>
  );
}

export default Todo;
