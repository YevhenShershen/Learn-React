import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/app";
import { Button } from "./components/learn-react/state-component";
//StrictMode это инструмент для обнаружения потенциальных проблем в нашем приложении(говоря простыми словами)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Button></Button>
  </StrictMode>
);
