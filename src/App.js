//npm start

import "./App.css";
// создание элементарного компонента Htader
const Header = () => {
  return <h2>Elementary component</h2>;
};
const Field =()=>{
  return <input placeholder="Type here" type="text" />
}
function Btn(){
  return <button>Click</button>
}
function App() {
  return (
    <div className="App">
      <Header />
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
