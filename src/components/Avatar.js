import React, { Component, Fragment } from 'react';

import {
    Row,
    Col,
    Container
} from 'reactstrap';

import Char from './Char'
import Info from './Info'

import wow from '../assets/img/logo.png'

export default class _Avatar extends Component {
    render() {
        return (
            <Fragment>
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
                            <Info />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
};