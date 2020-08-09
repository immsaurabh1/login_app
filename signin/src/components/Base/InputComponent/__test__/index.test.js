import React from "react";
import { render, cleanup } from "@testing-library/react";
import Input from "../index.js";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Input />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
  const { container } = render(<Input value="value" />);
  expect(container).toMatchSnapshot();
});
