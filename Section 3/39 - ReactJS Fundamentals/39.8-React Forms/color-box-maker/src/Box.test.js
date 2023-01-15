import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box.js";

it("should render", () => {
  render(<Box />);
});

it("should render manual box", () => {
  render(<Box id={5} color='blue' width='200' height='200' handleRemove />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
