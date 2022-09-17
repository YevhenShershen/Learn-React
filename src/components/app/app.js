import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employerslist from "../employers-list/employers-list";
import Employersaddform from "../employers-add-form/employers-add-form";
function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <Employerslist />
      <Employersaddform/>
    </div>
  );
}
export default App;
