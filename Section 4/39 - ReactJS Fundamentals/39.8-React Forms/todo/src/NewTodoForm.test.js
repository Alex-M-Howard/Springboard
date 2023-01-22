import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm.js";

it("should render", () => {
  render(<NewTodoForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
