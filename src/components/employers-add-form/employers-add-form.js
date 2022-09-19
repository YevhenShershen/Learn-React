import { Component } from "react";
import "./employers-add-form.css";
class Employersaddform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: 0,
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const {name, salary} = this.state
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            placeholder="Как его зовут?"
            className="form-control new-post-label"
            value={name}
            name="name"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            placeholder="З/П в $?"
            className="form-control new-post-label"
            value={salary}
            name="salary"
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
export default Employersaddform;
