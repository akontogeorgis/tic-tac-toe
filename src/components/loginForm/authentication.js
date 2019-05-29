import React from 'react';
import Login from './login.js'
import Register from './register.js'
import {connect} from "react-redux";


function Authentication(props) {

    switch(props.currentTab){

        case 'Login':
            return <Login />;

        case 'Register':
            return <Register />;

        default:
            return <Login />;

    }

}

const mapStateToProps = state=> {
    return {
        currentTab: state.get('currentTab'),
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Authentication);