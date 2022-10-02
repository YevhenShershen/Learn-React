import { Container, Row, Col } from "react-bootstrap";

const PropsChildren = (props) => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col>{props.left}</Col>
        <Col>{props.right}</Col>
      </Row>
    </Container>
  );
};
export default PropsChildren;
