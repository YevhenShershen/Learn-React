import { Component } from "react";

class StateComponent extends Component {
  constructor(props) {
    //что бы использовать пропсы в нашем стеите мы вызываем в super пропсы
    super(props);
    //что бы создать состояние с данными мы создаем объект this.state={}
    //в стеите мы описываем свойства
    this.state = {
      years: 27,
      text: "+++",
    };
  }
  //использовать только стрелочную функцию
  //
  nextYear = () => {
    //setState запускает перерисовку компонента
    // this.setState({years: this.state.years + 1}) с помощью команды setState мы можем менять state
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };
  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        {/* метод который находится внутри класса - this.nextYear */}
        <button className="btn btn-primary" onClick={this.nextYear}>
          {this.state.text}
        </button>
        <h1>
          My name is {name}, surnmae - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}
export default StateComponent;
//у компнонета может быть внутреннее состояние которое динамически меняется
//оно может  быть как у классовых так и функциональных компонентов
//state напрямую менять нельзя, только через команду setState
// команда setState выполняется ассинхронно вызывать лучше изминения через колбекфункцию
//