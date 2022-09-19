import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employerslist from "../employers-list/employers-list";
import Employersaddform from "../employers-add-form/employers-add-form";
import StateComponent from "../learn-react/state-component";
function App() {
  const data = [
    { name: "John C.", salary: 800, increase: true, id: 1 },
    { name: "Alex M.", salary: 1300, increase: false, id: 2 },
    { name: "Carl P.", salary: 13300, increase: true, id: 3 },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <Employerslist data={data} onDelete={(id) => console.log(id)} />
      <Employersaddform />
      <StateComponent name="Olex" surname="Kewals" link="Google" />
      <StateComponent name="Olex2" surname="Kewals2" link="Google2" />
    </div>
  );
}
export default App;
//render() метод рендер отвечает за вывод чего то на страницу
