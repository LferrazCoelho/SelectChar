import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import {
  Row,
  Col,
  Container
} from 'reactstrap';

import './App.css';
import SidebarL from './components/SidebarL';
import Avatar from './components/Avatar';
import SidebarR from './components/SidebarR';


class App extends Component {
  render () {

    const bgPage = this.props.bg
    
    return (
      <Container fluid className={`p-5 ${bgPage} `}>
        <Row>
          <Col sm={3} className="ml-1 mr-1">
            <SidebarL />
          </Col>
          <Col>
            <Avatar />
          </Col>
          <Col sm={3} className="ml-1 mr-1">
            <SidebarR />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return{
    bg: state.bg
  }
}

export default connect (mapStateToProps) (App);
