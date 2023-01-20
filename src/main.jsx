import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FormState from "./context/FormState";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormState>
      <App />
    </FormState>
  </React.StrictMode>
);
