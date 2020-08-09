import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "../index.js";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button id="test" title="Login" />);
  expect(getByTestId("btn-cmp")).toHaveTextContent("Login");
});

it("matches snapshot", () => {
  const { container, getByTestId } = render(<Button id="test" title="Login" />);
  expect(getByTestId("btn-cmp")).toHaveTextContent("Login");
  expect(container).toMatchSnapshot();
});
