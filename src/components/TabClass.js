import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { 
    Col
} from 'reactstrap';

import {
    classWar,
    classWor,
    classMag,
    classPri,
    classXam,
    classPal,
    classRou,
    classDru
} from '../actions'

import xam from '../assets/img/xam.png'
import pal from '../assets/img/pal.png'
import war from '../assets/img/war.png'
import wor from '../assets/img/wor.png'
import mag from '../assets/img/mag.png'
import dru from '../assets/img/dru.png'
import pri from '../assets/img/pri.png'
import rou from '../assets/img/rou.png'

class TabClass extends Component{
    
    render() {

    const activeTab = this.props.tabState;
    
        return(
            <Fragment>
                <Col className="m-2">
                    <img src={xam} alt="Mortos Vivos" onClick={() => this.props.dispatch(classXam())} style={{ height: '45px'}}/>
                    <img src={pal} alt="Mortos Vivos" onClick={() => this.props.dispatch(classPal())} style={{ height: '45px'}}/>
                    <img src={war} alt="Mortos Vivos" onClick={() => this.props.dispatch(classWar())} style={{ height: '45px'}}/>
                    <img src={wor} alt="Mortos Vivos" onClick={() => this.props.dispatch(classWor())} style={{ height: '45px'}}/>
                    <img src={mag} alt="Mortos Vivos" onClick={() => this.props.dispatch(classMag())} style={{ height: '45px'}}/>
                    <img src={dru} alt="Mortos Vivos" onClick={() => this.props.dispatch(classDru())} style={{ height: '45px'}}/>
                    <img src={pri} alt="Mortos Vivos" onClick={() => this.props.dispatch(classPri())} style={{ height: '45px'}}/>
                    <img src={rou} alt="Mortos Vivos" onClick={() => this.props.dispatch(classRou())} style={{ height: '45px'}}/>
                </Col>
            </Fragment>
        )
    }
}

export default connect () (TabClass);