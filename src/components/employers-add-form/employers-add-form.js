import { Component } from "react";
// import "./employers-add-form.css";
import "./employers-add-form.scss";
class Employersaddform extends Component {
  state = {
    name: "",
    salary: "",
  };
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };
  static onLog = () => {
    console.log("Some Text");
  };
  static logged = "on";
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
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
Employersaddform.onLog();
console.log(Employersaddform.logged)
export default Employersaddform;
