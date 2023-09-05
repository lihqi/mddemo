import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const content =
  "Given a **formula** below" +
  "$$" +
  "s = ut + \\frac{1}{2}at^{2}" +
  "$$" +
  "Calculate the value of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $t = 1s$;";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App>{content}</App>
  </React.StrictMode>,
  rootElement
);
