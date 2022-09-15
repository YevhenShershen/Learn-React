import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const text1 = <h1>Text1</h1>;
const text = "Hello variable";
//если много строчная структура всегда используем скобкиconst elem = (....)
const elem = (
  <div>
    {/* нельзя использовать объекты как переменные в круглых скобках */}
    <h2 className="title">Text:{text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex={0}>Click</button>
    <button tabIndex="0">Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);
