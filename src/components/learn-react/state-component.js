import React, { Component } from "react";
import PropsChildren from "../../props-children";
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
const DynamicGreating = (props) => {
  return (
    <div className={"mb-3 p-3 border border-" + props.color}>
      {
        // 2)модифицируем наши пустые элементы добовляя им классы
        React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            className: "shadow p-p3 m-3 border rounded",
          });
        })
      }
    </div>
  );
};
//делаем спецефичный компонент на базе друго компонента
//использование композиции
const HelloGreating = () => {
  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <DynamicGreating color={"primary"}>
        <h2>Some text</h2>
        <h2>Hello world</h2>
      </DynamicGreating>
    </div>
  );
};
//ЗАДАЧА: СДЕЛАТЬ ТАК ЧТО БЫ ДВА ОТДЕЛЬНЫХ КОМПОНЕНТА НЕ ЗАВИСИЛИ ДРУГ ОТ ДРУГА И МЫ НЕ ТЕРЯЛИ ИХ ГИБКОСТИ,ИХ СПЕЦЕФИЧНОСТИ
//Задача2: связать эти два компонента(Message Counter) и что бы один работал внутри другого
//РЕШЕНИЕ:приминяем render props!
const Message = (props) => {
  //4*)и наш пропс 'counter' уже выводится в компоненте Message и рендерится на страницу
  return <h2>The counter is {props.counter}</h2>;
};
//компонет
//2*)передали эту функцию и зашли во внутрь компонента Counter
class Counter extends Component {
  state = {
    counter: 0,
  };
  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };
  render() {
    return (
      <>
        <button className={"btn btn-primary"} onClick={this.changeCounter}>
          Click me
        </button>
        {/* 3*)в нужном нам месте вызвали эту функцию, при этом что бы связать наше состояние мы передали аргумент this.state.counter*/}
        {/* 3*)который и передается в  {counter =>(<Message counter={counter} />)} */}
        {this.props.render(this.state.counter)}
      </>
    );
  }
}
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
        {/* Рендер Пропсы */}
        {/* 1*)берем компонент Counter и передаем props' render', который внутри себя содержал callback функцию */}
        {/* эта функция принимает в себя какой то аргумент и возвращает другой компонет "Message"*/}
        <Counter render={(counter) => <Message counter={counter} />} />
        <HelloGreating />
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
        {/* 1)передача в компонент обсолютно пустых элементов */}

        <PropsChildren
          left={
            <DynamicGreating color={"primary"}>
              <h2>Some text</h2>
              <h2>Hello world</h2>
            </DynamicGreating>
          }
          right={
            <DynamicGreating color={"primary"}>
              <h2>RIGHT</h2>
            </DynamicGreating>
          }
        />
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
