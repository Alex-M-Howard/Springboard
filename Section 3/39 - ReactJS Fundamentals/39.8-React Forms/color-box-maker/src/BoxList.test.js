import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList.js";

it("should render", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
