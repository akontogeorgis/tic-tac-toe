import React, {useState,useEffect} from 'react';
import {connect} from "react-redux";
import {getUsername, getPassword, getUser, changeTab} from "../../actions/actions";


class Login extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <React.Fragment>
                <div className="tabs">
                    <button className="tabButtoms" onClick = {this.props.changeTab}>Login</button>
                    <button className="tabButtoms" onClick = {this.props.changeTab}>Register</button>
                </div>

                <div className = "tabContent" id = "Login" >

                    <h2>User Login</h2>
                    <form method ="POST" action="" name="loginForm" onSubmit={this.props.getUserCredentials}>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" id="user_name" value={this.props.username} onChange = {this.props.onChangeUsername()} required/>
                        <br/><br/>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="password" value={this.props.password} onChange = {this.props.onChangePassword()} required/>

                        <br/><br/>

                        <button type="submit">Login</button>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}



const mapStateToProps = state=> {
    return {
        existsUser: state.get('existsUser'),
        username: state.get('username'),
        password: state.get('password'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeUsername: (username) => {dispatch(getUsername(username))},
        onChangePassword: (password) => {dispatch(getPassword(password))},
        getUserCredentials: (existsUser) => {dispatch(getUser(existsUser))},
        changeTab: (flag) => {dispatch(changeTab(flag))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);