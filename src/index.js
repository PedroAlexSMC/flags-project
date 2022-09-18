import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FlagsProvider } from "./provider/flagsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlagsProvider>
    <App />
    </FlagsProvider>
  </React.StrictMode>
);
