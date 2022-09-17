import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employerslist from "../employers-list/employers-list";
import Employersaddform from "../employers-add-form/employers-add-form";
function App() {
  const data = [
    { name: "John C.", salary: 800 },
    { name: "Alex M.", salary: 1300 },
    { name: "Carl P.", salary: 13300 },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <Employerslist data={data} />
      <Employersaddform />
    </div>
  );
}
export default App;
