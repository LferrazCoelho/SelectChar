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
                <Container fluid className="justify-content-center">
                    <Row>
                        <Col>
                            <img src={wow} alt="logo" style={{ width: '30%' }}/>
                        </Col>
                    </Row>
                    <Char />
                    <Row>
                        <Col sm={8}>
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

function mapStateToProps(state) {
    return {
      level: state.level
    };
  }

const Avatar = connect(mapStateToProps)(_Avatar);