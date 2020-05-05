import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container
} from 'reactstrap';

import './App.css';
import SidebarL from './components/SidebarL';
import SidebarR from './components/SidebarR';
import Char from './components/Char';

import wow from './assets/img/logo.png';

const bgPage = "bgHum"

class App extends Component {
  render () {
    return (
      <Container fluid className={`p-5 ${bgPage} `}>
        <Row>
          <Col sm={3} className="ml-1 mr-1">
            <SidebarL />
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <Col className="d-flex justify-content-center">
                  <img src={wow} alt="logo" style={{ width: '30%' }} />
                </Col>
              </Row>
              <Row className="m-4">
                <Col className="d-flex justify-content-center">
                  <Char />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <Card inverse style={{ textAlign: 'center', backgroundColor: '#333', borderColor: '#333' }}>
                    <CardHeader>Athas</CardHeader>
                    <CardBody>
                      <p>
                        Raça: Humano | Classe: Paladino | Lvl: {this.props.level}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={3} className="ml-1 mr-1">
            <SidebarR />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  level: store.lvlUpState.level
});

export default connect(mapStateToProps)(App);
