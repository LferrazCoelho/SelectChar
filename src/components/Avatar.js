import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    Container
} from 'reactstrap';

import Char from './Char'

import wow from '../assets/img/logo.png'

export default class _Avatar extends React.Component {
    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <img src={wow} alt="logo" style={{ width: '30%' }}/>
                        </Col>
                    </Row>
                    <Row className="m-4">
                        <Col className="d-flex justify-content-center">
                            <Char />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Card inverse style={{ textAlign:'center', backgroundColor: '#333', borderColor: '#333' }}>
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
            </Fragment>
        )
    }
};

const Avatar = connect()(_Avatar);