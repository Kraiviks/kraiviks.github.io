import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={dec}>DEC</button>
            <button onClick={inc}>INC</button>
            <button onClick={rnd}>RND</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mamDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const value = Math.floor(Math.random()*10);
            rnd(value);
        }
    }
}

export default connect(mapStateToProps, mamDispatchToProps)(Counter);