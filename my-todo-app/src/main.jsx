import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TskeContextProvider from "./context/tskecontext";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <TskeContextProvider>
      <App />
    </TskeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
