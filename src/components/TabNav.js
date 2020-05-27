import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { 
    TabContent,
    TabPane,
    Button,
    Row,
    Col,
} from 'reactstrap';

import { 
    charHum,
    charAna,
    charGno,
    charElf,
    charOrc,
    charTro,
    charTau,
    charUnd,
    masc,
    femi
} from '../actions';

import hum from '../assets/img/hum.png'
import ana from '../assets/img/ana.png'
import gno from '../assets/img/gno.png'
import elf from '../assets/img/elf.png'
import orc from '../assets/img/orc.png'
import tro from '../assets/img/tro.png'
import und from '../assets/img/und.png'
import tau from '../assets/img/tau.png'

import humf from '../assets/img/humf.png'
import anaf from '../assets/img/anaf.png'
import gnof from '../assets/img/gnof.png'
import elff from '../assets/img/elff.png'
import orcf from '../assets/img/orcf.png'
import trof from '../assets/img/trof.png'
import undf from '../assets/img/undf.png'
import tauf from '../assets/img/tauf.png'


const TabNav = (props) => {

    const activeTab = this.props.tabState;

    return (
        <Fragment>
            <Row className="d-flex justify-content-center">
                <Col className="m-1" sm={12}>
                    <Button
                        onClick={() => this.props.dispatch(masc())}
                    >
                        1
                      </Button>
                    <Button
                        onClick={() => this.props.dispatch(femi())}
                    >
                        2
                      </Button>
                </Col>
                <Col className="m-1" sm={12}>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col className="" sm={3}>
                                    <img src={hum} onClick={() => this.props.dispatch(charHum())}
                                        alt="hum" />
                                    <img src={ana} onClick={() => this.props.dispatch(charAna())}
                                        alt="ana" />
                                    <img src={gno} onClick={() => this.props.dispatch(charGno())}
                                        alt="gno" />
                                    <img src={elf} onClick={() => this.props.dispatch(charElf())}
                                        alt="elf" />
                                </Col>
                                <Col className="" sm={3}>
                                    <img src={orc} onClick={() => this.props.dispatch(charOrc())}
                                        alt="orc" />
                                    <img src={tro} onClick={() => this.props.dispatch(charTro())}
                                        alt="tro" />
                                    <img src={tau} onClick={() => this.props.dispatch(charTau())}
                                        alt="tau" />
                                    <img src={und} onClick={() => this.props.dispatch(charUnd())}
                                        alt="und" />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col className="" sm={3}>
                                    <img src={humf} onClick={() => this.props.dispatch(charHum())}
                                        alt="humf" />
                                    <img src={anaf} onClick={() => this.props.dispatch(charAna())}
                                        alt="anaf" />
                                    <img src={gnof} onClick={() => this.props.dispatch(charGno())}
                                        alt="gnof" />
                                    <img src={elff} onClick={() => this.props.dispatch(charElf())}
                                        alt="elff" />
                                </Col>
                                <Col className="" sm={3}>
                                    <img src={orcf} onClick={() => this.props.dispatch(charOrc())}
                                        alt="orcf" />
                                    <img src={trof} onClick={() => this.props.dispatch(charTro())}
                                        alt="trof" />
                                    <img src={tauf} onClick={() => this.props.dispatch(charTau())}
                                        alt="tauf" />
                                    <img src={undf} onClick={() => this.props.dispatch(charUnd())}
                                        alt="undf" />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </Fragment>
    )
}

function mapStateToProps(state) {
    return{
        tabState: state.tabState
    }
}

export default connect (mapStateToProps) (TabNav);