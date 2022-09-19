import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employerslist from "../employers-list/employers-list";
import Employersaddform from "../employers-add-form/employers-add-form";
import StateComponent from "../learn-react/state-component";
import "./app.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: true, id: 1 },
        { name: "Alex M.", salary: 1300, increase: false, id: 2 },
        { name: "Carl P.", salary: 13300, increase: true, id: 3 },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return { data: data.filter((item) => item.id !== id) };
    });
  };
  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <Employerslist data={this.state.data} onDelete={this.deleteItem} />
        <Employersaddform />
        {/* <StateComponent name="Olex" surname="Kewals" link="Google" />
        <StateComponent name="Olex2" surname="Kewals2" link="Google2" /> */}
      </div>
    );
  }
}
export default App;
//render() метод рендер отвечает за вывод чего то на страницу
