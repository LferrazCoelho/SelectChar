import React, { Component , Fragment } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Row
} from 'reactstrap';

export default class SidebarR extends Component{
    render() {
        return (
            <Fragment>
                    <Row>
                        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader>Historia da Facção - Horda</CardHeader>
                            <CardBody>
                                <CardText>
                                    <p>
                                        A Horda foi criada através da manipulação da Legião Ardente, em particular,
                                        de Kil'jaeden, o Enganador, para agir como um pupilo para seu mestre demônio
                                        e agir sem questionamentos. A história da Horda começa em Fogo do Inferno... 
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row className="mt-3">
                        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader>Caracteristicas Raciais - Humano</CardHeader>
                            <CardBody>
                                <CardText>
                                <p>
                                    - Cultivo (Passivo): Perícia em Herborismo aumentada em 15. Você coleta plantas mais rápido do que herboristas normais.
                                </p>
                                <p>
                                    - Pisada de Guerra: Atordoa até 5 inimigos em um raio de 8 metros por 2 s.
                                </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Row>
            </Fragment>
        )
    }
};