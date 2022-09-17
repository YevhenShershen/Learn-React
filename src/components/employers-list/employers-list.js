import Employerslistitem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
const Employerslist = ({ data }) => {
  const elements = data.map((item, index) => {
    //Используем синтаксис частичной диструктуризации
    //const {id, ...itemProps} = item;  вытаскиваем отдельно пропс id с объекта и
    // остальные свойсва (пропсы) которые у нас остались мы их объеденяем в одной
    //свойство itemProps - диструктуризация по остаточному принципу
    const { id, ...itemProps } = item;
    //<Employerslistitem name={item.name} salary={item.salary} /> равняется спрей оператору <Employerslistitem {...item} />
    //спрей оператор разворачивает наш объект
    return <Employerslistitem key={index} {...itemProps} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default Employerslist;
