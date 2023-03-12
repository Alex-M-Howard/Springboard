import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice;
