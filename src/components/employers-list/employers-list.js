import Employerslistitem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
const Employerslist = ({ data }) => {
  const elements = data.map((item) => {
    return <Employerslistitem name={item.name} salary={item.salary} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default Employerslist;
