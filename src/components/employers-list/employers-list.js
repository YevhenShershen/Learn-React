import Employerslistitem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
const Employerslist = ({ data, onDelete, onToggleProp}) => {
  const elements = data.map((item) => {
    //Используем синтаксис частичной диструктуризации
    //const {id, ...itemProps} = item;  вытаскиваем отдельно пропс id с объекта и
    // остальные свойсва (пропсы) которые у нас остались мы их объеденяем в одной
    //свойство itemProps - диструктуризация по остаточному принципу
    const { id, ...itemProps } = item;
    //<Employerslistitem name={item.name} salary={item.salary} /> равняется спрей оператору <Employerslistitem {...item} />
    //спрей оператор разворачивает наш объект
    return (
      <Employerslistitem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        // e.currentTarget -Определяет элемент, в котором в данный момент обрабатывается событие, при движении события внутри DOM
        // .getAttribute('data-toggle') - получение значения атрибута 'data-toggle' который находится в плике employers-list-item.js
        onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default Employerslist;
