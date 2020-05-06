import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

class Info extends Component {
    render () {
        return (
            <Fragment>
                <Card inverse style={{ textAlign: 'center', backgroundColor: '#333', borderColor: '#333' }}>
                    <CardHeader>{this.props.name}</CardHeader>
                    <CardBody>
                        <p>
                            Raça: {this.props.race} | Classe: {this.props.class} | Lvl: {this.props.level}
                        </p>
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        name: state.name,
        race: state.race,
        class: state.class,
        level: state.level
    }
}

export default connect (mapStateToProps) (Info);