import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { 
    TabContent,
    TabPane,
    Row,
    Col
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
    charHumf,
    charAnaf,
    charGnof,
    charElff,
    charOrcf,
    charTrof,
    charTauf,
    charUndf,
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

import iconM from '../assets/img/iconM.png'
import iconF from '../assets/img/iconF.png'

class TabRace extends Component{
    
    render() {

    const activeTab = this.props.tabState;
    
        return(
            <Fragment>
                <Row className="d-flex justify-content-center">
                    <Col className="d-flex justify-content-center m-1" sm={12}>
                        <img src={iconM}
                            onClick={() => this.props.dispatch(masc())}
                        />
                        <img src={iconF}
                            onClick={() => this.props.dispatch(femi())}
                        />
                    </Col>
                    <Col className="m-1" sm={12}>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row className="d-flex justify-content-center">
                                    <Col className="" sm={5}>
                                        <img src={hum} onClick={() => this.props.dispatch(charHum())}
                                            alt="Humanos" />
                                        <img src={ana} onClick={() => this.props.dispatch(charAna())}
                                            alt="Anões" />
                                        <img src={gno} onClick={() => this.props.dispatch(charGno())}
                                            alt="Gnomos" />
                                        <img src={elf} onClick={() => this.props.dispatch(charElf())}
                                            alt="Elfos Noturnos" />
                                    </Col>
                                    <Col className="" sm={5}>
                                        <img src={orc} onClick={() => this.props.dispatch(charOrc())}
                                            alt="Orcs" />
                                        <img src={tro} onClick={() => this.props.dispatch(charTro())}
                                            alt="Trolls" />
                                        <img src={tau} onClick={() => this.props.dispatch(charTau())}
                                            alt="Taurens" />
                                        <img src={und} onClick={() => this.props.dispatch(charUnd())}
                                            alt="Mortos Vivos" />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row className="d-flex justify-content-center">
                                    <Col className="" sm={5}>
                                        <img src={humf} onClick={() => this.props.dispatch(charHumf())}
                                            alt="Humanos" />
                                        <img src={anaf} onClick={() => this.props.dispatch(charAnaf())}
                                            alt="Anões" />
                                        <img src={gnof} onClick={() => this.props.dispatch(charGnof())}
                                            alt="Gnomos" />
                                        <img src={elff} onClick={() => this.props.dispatch(charElff())}
                                            alt="Elfos Noturnos" />
                                    </Col>
                                    <Col className="" sm={5}>
                                        <img src={orcf} onClick={() => this.props.dispatch(charOrcf())}
                                            alt="Orcs" />
                                        <img src={trof} onClick={() => this.props.dispatch(charTrof())}
                                            alt="Trolls" />
                                        <img src={tauf} onClick={() => this.props.dispatch(charTauf())}
                                            alt="Taurens" />
                                        <img src={undf} onClick={() => this.props.dispatch(charUndf())}
                                            alt="Mortos Vivos" />
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        tabState: state.tabState
    }
}

export default connect (mapStateToProps) (TabRace);