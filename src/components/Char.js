import React, { Component , Fragment } from 'react';
import {
    Row
} from 'reactstrap';



export default class Avatar extends Component{
    render() {
        return (
            <Fragment>
                    <Row className="m-4">
                        <img
                         src="https://www.vippng.com/png/full/49-493882_human-paladin-model-action-figure.png"
                         alt="humPala"
                         style={{ height: '350px' }}
                         />
                    </Row>
            </Fragment>
        )
    }
};