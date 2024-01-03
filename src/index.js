import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// const ReactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "click me to visit google",
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
