//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//ReactDOM.render(what to show, where to show);
// ReactDOM.render(<h1> My favorite passtime activities</h1>, document.getElementById("root"));
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1> My favorite passtime activities</h1>
    <ul>
      <li>Phone ghata</li>
      <li>lyadh khawa</li>
      <li>overthink kora</li>
    </ul>
  </div>,
  document.getElementById("root")
);
