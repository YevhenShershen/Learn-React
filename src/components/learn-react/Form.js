import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Form extends Component {
  myRef = React.createRef();

  //хук вызывается после render()
  //   componentDidMount() {
  //     this.myRef.current.focus();
  //   }
  focusFirsTI = () => {
    this.myRef.current.focus();
  };
  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              ref={this.myRef}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              onClick={this.focusFirsTI}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </Container>
    );
  }
}

export default Form;
//ref это ссылка на элемент или компонент в ДОМ дереве уже в отрисованном интерфейсе на странице(в браузере)
//когда у нас есть ссылка которая уже есть в браузере можем что то делать
