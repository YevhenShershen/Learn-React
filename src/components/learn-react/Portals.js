import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import PortalReactDOM from "react-dom";
class Portals extends Component {
  render() {
    return (
      <Container>
        <form
          className="w-50 border mt-5 p-3 m-auto"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              PORTAL address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              PORTAL textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <Portal>
            <Msg />
          </Portal>
        </form>
      </Container>
    );
  }
}
const Portal = (props) => {
  //создаем div на странице
  const node = document.createElement("div");
  document.body.appendChild(node);

  //команда для создания портала
  //два аргумента 1)children - дочерний элемент или компонент, который мы должны куда-то отрендерить
  // второй аргумент этот тот контейнер куда мы хотим поместить наш children
  return PortalReactDOM.createPortal(props.children, node);
};

const Msg = () => {
  return (
    <div
      style={{
        width: "500px",
        height: "150px",
        backgroundColor: "red",
        position: "absolute",
        right: "0",
        bottom: "0",
      }}
    >
      Hello
    </div>
  );
};

export default Portals;
//Порталы позволяют отрендерить любые элементы вне своего родительского компонента именно в ДОМ структуре
//
