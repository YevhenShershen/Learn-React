import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/app";
import { Button } from "./components/learn-react/state-component";
import styled from "styled-components";
//StrictMode это инструмент для обнаружения потенциальных проблем в нашем приложении(говоря простыми словами)

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <BigButton>+++</BigButton>
  </StrictMode>
);
