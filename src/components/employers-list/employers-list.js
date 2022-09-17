import Employerslistitem from "../employers-list-item/employers-list-item";
import './employers-list.css'
const Employerslist = () => {
  return (
    <ul className="app-list list-group">
      <Employerslistitem name="John C." salary={800}/>
      <Employerslistitem name="Alex M." salary={1300}/>
      <Employerslistitem name="Carl P." salary={3300}/>
    </ul>
  );
};
export default Employerslist;
