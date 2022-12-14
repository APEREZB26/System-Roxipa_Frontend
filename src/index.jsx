import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Roxipa.jsx";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
);
