import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import App from "./App.js";

it("should render", () => {
  render(<App />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function () {
  render(<App />);
    
  // no items yet
  let todo = screen.queryByText("Get new job");
    expect(todo).toBe(null);
    
  const todoInput = screen.getByLabelText("Todo:");
  const addBtn = screen.queryByText("Add");

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "Get new job" } });
  fireEvent.click(addBtn);

  // item exists!
    todo = screen.queryByText("Get new job");
    expect(todo).not.toBe(null);
  

  const removeBtn = screen.queryByText("X");
  fireEvent.click(removeBtn);

  todo = screen.queryByText("Get new job");
  expect(todo).toBe(null);
});
