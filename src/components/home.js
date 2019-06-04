import React from 'react';
import Game from './game/game.js'
import Authentication from './loginForm/authentication.js'
import {connect} from "react-redux";


function Home(props) {

    return props.existsUser ? <Game /> : <Authentication/>;

}

const mapStateToProps = state=> {
    return {
        existsUser: state.get('existsUser'),
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);