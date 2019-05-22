import React, {useState,useEffect} from 'react';
import {connect} from "react-redux";
import {getUsername, getPassword, getEmail, getUser, changeTab} from "../../actions/actions";


class Register extends React.Component {

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

                <div className = "tabContent" id = "Register" >
                    <h2>User Registration</h2>
                    <form method ="POST" action="" name="registerForm" onSubmit={this.props.getUserCredentials}>

                        <label><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" id="email" value={this.props.email} onChange = {this.props.onChangeEmail(this.value)} required/>

                        <br/><br/>

                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" id="user_name" value={this.props.username} onChange = {this.props.onChangeUsername(this.value)} required/>

                        <br/><br/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="password" value={this.props.password} onChange = {this.props.onChangePassword(this.value)} required/>

                        <br/><br/>

                        <label><b>Password again</b></label>
                        <input type="password" placeholder="Repeat password" id="re-password" value={this.props.password} onChange = {this.props.onChangePassword(this.value)} required/>

                        <br/><br/>

                        <button type="submit">Register</button>
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
        email: state.get('email'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeUsername: (username) => {dispatch(getUsername(username))},
        onChangePassword: (password) => {dispatch(getPassword(password))},
        onChangeEmail: (email) => {dispatch(getEmail(email))},
        getUserCredentials: (existsUser) => {dispatch(getUser(existsUser))},
        changeTab: (flag) => {dispatch(changeTab(flag))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);