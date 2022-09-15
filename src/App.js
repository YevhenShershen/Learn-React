//npm start

import "./App.css";
// создание элементарного компонента Htader
const Header = () => {
  return <h2>Elementary component</h2>;
};
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
