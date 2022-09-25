import { Component } from "react";
import styled from "styled-components";
//create styled-components
export const Button = styled.button`
display:block;
padding: 5px 15px;
background-color:gold;
border: 1px solid rgba(0,0,0, .2);
box-shadow 5px 5px 10px rgba(0,0,0, .2)`;
const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${(props) => (props.active ? "orange" : "black")};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;
const Header = styled.h2`
  font-size: 22px;
`;
class StateComponent extends Component {
  constructor(props) {
    //что бы использовать пропсы в нашем стеите мы вызываем в super пропсы
    super(props);
    //что бы создать состояние с данными мы создаем объект this.state={}
    //в стеите мы описываем свойства
    this.state = {
      years: 27,
      text: "+++",
      position: "",
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
  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value,
    });
  };
  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <EmpItem active>
        {/* метод который находится внутри класса - this.nextYear */}
        <Button className="btn btn-primary" onClick={this.nextYear}>
          {this.state.text}
        </Button>
        <Header>
          My name is {name}, surnmae - {surname}, age - {years}, position -{" "}
          {position}
        </Header>
        <a href={link}>My profile</a>
        <form>
          <span>Введи должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </EmpItem>
    );
  }
}
export default StateComponent;
//у компнонета может быть внутреннее состояние которое динамически меняется
//оно может  быть как у классовых так и функциональных компонентов
//state напрямую менять нельзя, только через команду setState
// команда setState выполняется ассинхронно вызывать лучше изминения через колбекфункцию

//css in js  https://styled-components.com/    npm install --save styled-components
