import "./employers-list-item.css";
import { Component } from "react";

class Employerslistitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: true,
    };
  }
  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  addLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };
  render() {
    const { name, salary, onDelete } = this.props;
    const { increase } = this.state;
    const { like } = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    return (
      <li className={like ? classNames : classNames + " like"}>
        <span className="list-group-item-label" onClick={this.addLike}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
export default Employerslistitem;
