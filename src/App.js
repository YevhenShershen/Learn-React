//npm start

import "./App.css";
// создание элементарного компонента Header
const Header = () => {
  return <h2>Elementary component</h2>;
};
const Field = () => {
  return <input placeholder="Type here" type="text" />;
};
function Btn() {
  // const text = 'Log in'
  const res = () => {
    return "Log in";
  };
  return <button>{res()}</button>;
}
function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
      <button>{3 + 4}</button>
    </div>
  );
}

export default App;
