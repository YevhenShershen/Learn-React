//npm start
import { Component, StrictMode } from "react";
import "./App.css";
// создание элементарного компонента Header
const Header = () => {
  return <h2>Elementary component</h2>;
};
//создание компонента с использованием синтексиса "класса"
class Field extends Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: "300px",
    };
    return <input placeholder={holder} type="text" style={styledField} />;
  }
}
function Btn() {
  const text = "Log in";
  const logged = true;
  //Conditional (ternary) operator
  return <button>{logged ? "Enter" : text}</button>;
}
function App() {
  return (
    <div className="App">
{/*StrictMode:  https://ru.reactjs.org/docs/strict-mode.html */}
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export default App;
