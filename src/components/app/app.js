import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employerslist from "../employers-list/employers-list";
import Employersaddform from "../employers-add-form/employers-add-form";

import "./app.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: true, rise: true, id: 1 },
        { name: "Alex M.", salary: 1300, increase: false, rise: false, id: 2 },
        { name: "Carl P.", salary: 13300, increase: true, rise: false, id: 3 },
      ],
    };
    this.maxId = 4;
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
  //add item from form
  addItem = (name, salary) => {
    const newItem = {
        name,
        salary,
        increase: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}
  onToggleProp = (id,prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }))
  };
  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <Employerslist
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}

        />
        <Employersaddform onAdd={this.addItem} />
        {/* <StateComponent name="Olex" surname="Kewals" link="Google" />
        <StateComponent name="Olex2" surname="Kewals2" link="Google2" /> */}
      </div>
    );
  }
}
export default App;
//render() метод рендер отвечает за вывод чего то на страницу
