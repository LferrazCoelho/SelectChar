import React from 'react';
import { connect } from 'react-redux';

import {
Container,
Row,
Col
} from 'reactstrap';

import './App.css';
import SidebarL from './components/SidebarL';
import SidebarR from './components/SidebarR';
import Avatar from './components/Avatar';

const bgPage = "bgHum"


export default class _Main extends React.Component {
    render() {
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
      )
    }
  };

function mapStateToProps(state) {
    return {
      level: state.level
    };
}

const Main = connect(mapStateToProps)(_Main)