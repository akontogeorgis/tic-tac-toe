import React from 'react';
import Login from './login.js'
import Register from './register.js'
import {changeTab, getPassword, getUser, getUsername} from "../../actions/actions";
import {connect} from "react-redux";


function Authentication(props) {
    if (props.flag) {
        return <Login />;
    }
    return <Register />;
}

const mapStateToProps = state=> {
    return {
        flag: state.get('flag'),
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Authentication);