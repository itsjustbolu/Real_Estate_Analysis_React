import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "./components/home";
import DataInputs from "./components/dataInputs";

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <Col>
            <Title />
            <DataInputs />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
