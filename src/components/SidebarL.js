import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { 
    upLvl,
    downLvl,
    nameValue
} from '../actions';

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

import TabRace from './TabRace'
import TabClass from './TabClass'

import up from '../assets/img/up.png'
import down from '../assets/img/down.png'

class SidebarL extends Component{
    state = {
        nameInput: ''
    }

    nameChange = e => {
        this.setState({
            nameInput: e.target.value
        })
    }

    render() { 

        const { nameInput } = this.state;

        return (
            <Fragment>
                <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardHeader className="text-center">Crie seu personagem</CardHeader>
                    <CardBody>
                        <Row>
                            <Col className="d-flex">
                                <Label>Nome</Label>
                                <Input 
                                className="mr-1 ml-1"
                                // value={nameInput}
                                size="sm"
                                type="text"
                                name="" 
                                // onClick={this.nameChange}
                                placeholder="Ex: Athas" />
                                <Button 
                                className="mr-1 ml-1"
                                size="sm"
                                // onClick={() => this.props.dispatch(nameValue(nameInput))}
                                >Verificar</Button>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center">
                                <Label className="m-1">Level</Label>
                                <img src={up}
                                className="m-1"
                                alt="subir level"
                                onClick={() => this.props.dispatch(upLvl())}
                                />
                                <img src={down}
                                className="m-1"
                                alt="subir level"
                                onClick={() => this.props.dispatch(downLvl())}
                                />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col className="d-flex justify-content-center" sm={12}>
                                <TabRace />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col className="d-flex justify-content-center" sm={12}>
                                <TabClass />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
};

function mapStateToProps (state) {
    return {
        name: state.nameValue
    }
}

export default connect(mapStateToProps) (SidebarL);