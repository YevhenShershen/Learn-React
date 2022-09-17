import Employerslistitem from "../employers-list-item/employers-list-item";
import './employers-list.css'
const Employerslist = () => {
  return (
    <ul className="app-list list-group">
      <Employerslistitem />
      <Employerslistitem />
      <Employerslistitem />
    </ul>
  );
};
export default Employerslist;
