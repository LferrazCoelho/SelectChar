import React, { Component , Fragment } from 'react';
import { connect } from 'react-redux';

class Char extends Component{
    render() {
        return (
            <Fragment>
                        <img
                         src={this.props.char}
                         alt="CharState"
                         style={{ height: '350px' }}
                         />
            </Fragment>
        )
    }
};

function mapStateToProps(state) {
    return{
        char: state.char
    }
}

export default connect(mapStateToProps) (Char);