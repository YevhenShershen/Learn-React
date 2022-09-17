import Employerslistitem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
const Employerslist = ({ data }) => {
  const elements = data.map((item) => {
    //<Employerslistitem name={item.name} salary={item.salary} /> равняется спрей оператору <Employerslistitem {...item} />
    //спрей оператор разворачивает наш объект
    return <Employerslistitem {...item} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default Employerslist;
