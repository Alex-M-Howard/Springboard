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

it("can add a new box", function () {
  render(<App />);
  // no items yet  
  let boxes = screen.queryAllByTestId("box-element");
  expect(boxes.length).toEqual(0);

  const colorInput = screen.getByLabelText("Color");
  const widthInput = screen.getByLabelText("Width");
  const heightInput = screen.queryByLabelText("Height");
  const addBtn = screen.queryByText("Add Box");

  // fill out the form
  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.click(addBtn);


  // item exists!
  boxes = screen.queryAllByTestId("box-element");
  let style = boxes[0].style._values;

  expect(boxes.length).toEqual(1);
  expect(style['background-color']).toBe("blue")
  expect(style['width']).toBe("100px")
  expect(style['height']).toBe("100px")

  const removeBtn = screen.queryByText("X");
  fireEvent.click(removeBtn);
  
  boxes = screen.queryAllByTestId("box-element");
  expect(boxes.length).toEqual(0);
});
