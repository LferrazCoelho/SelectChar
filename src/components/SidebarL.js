import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { upLvl, downLvl } from '../actions';

import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    Input,
    Button,
    Label,
} from 'reactstrap';

import hum from '../assets/img/hum.png'
import ana from '../assets/img/ana.png'
import gno from '../assets/img/gno.png'
import elf from '../assets/img/elf.png'
import dra from '../assets/img/dra.png'
import orc from '../assets/img/orc.png'
import tro from '../assets/img/tro.png'
import tau from '../assets/img/tau.png'
import und from '../assets/img/und.png'
import blo from '../assets/img/blo.png'
import up from '../assets/open-iconic/svg/chevron-top.svg'
import down from '../assets/open-iconic/svg/chevron-bottom.svg'

class SidebarL extends Component{
    render() {      
        return (
            <Fragment>
                <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardHeader>Caracteristicas do Avatar</CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <Label>Nome</Label>
                                <Input size="sm" type="text" name="" placeholder="Ex: Silvete" />
                                <Button size="sm">Verificar</Button>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <Label>Level</Label>
                                <Button
                                size="sm"
                                className="ml-2"
                                onClick={() => this.props.dispatch(upLvl())}
                                >
                                    <img src={up} alt="subir level" />
                                </Button>
                                <Button
                                size="sm"
                                className="ml-1"
                                onClick={() => this.props.dispatch(downLvl())}
                                >
                                    <img src={down} alt="descer level" />
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <Label>Raça</Label>
                            </Col>
                        </Row>
                        <Row className="pl-2 pr-2">
                            <Col>
                                <Button size="sm"><img src={hum} alt="Humanos" /></Button>
                                <Button size="sm"><img src={ana} alt="Humanos" /></Button>
                                <Button size="sm"><img src={gno} alt="Humanos" /></Button>
                                <Button size="sm"><img src={elf} alt="Humanos" /></Button>
                                <Button size="sm"><img src={dra} alt="Humanos" /></Button>
                            </Col>
                            <Col>
                                <Button size="sm"><img src={orc} alt="Humanos" /></Button>
                                <Button size="sm"><img src={tro} alt="Humanos" /></Button>
                                <Button size="sm"><img src={tau} alt="Humanos" /></Button>
                                <Button size="sm"><img src={und} alt="Humanos" /></Button>
                                <Button size="sm"><img src={blo} alt="Humanos" /></Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
};

export default connect() (SidebarL);