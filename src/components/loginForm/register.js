import React from 'react';
import {connect} from "react-redux";
import {registerUser, setTab} from "../../actions/actions";


class Register extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            user:'',
            password: '',
            password2:'',
            email: ''
        }
        //this.setUsername= this.setUsername.bind(this); axreiasto afou thn exw kanei arrow function
    }

    setUsername(event){
        this.setState({user: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }

    setPassword2(event){
        this.setState({password2: event.target.value});
    }

    setEmail(event){
        this.setState({email: event.target.value});
    }


    registerUser = (event) => {
        event.preventDefault(); // so page will not be refreshed when submit the form
        this.props.registerUser(this.state);
    }

    render(){

        return (
            <React.Fragment>

                <div className="tabs">
                    <button className="tabButtoms" onClick = {() => this.props.setTab('Login')}>Login</button>
                    <button className="tabButtoms" >Register</button>
                </div>

                <div className = "tabContent" id = "Register" >
                    <h2>User Registration</h2>
                    <form name="registerForm" onSubmit={this.registerUser}>

                        <label><b>Email </b></label>
                        <input type="email" placeholder="Enter Email" id="email" value={this.state.email} onChange = {event => this.setEmail(event)} required/>

                        <br/><br/>

                        <label><b>Username </b></label>
                        <input type="text" placeholder="Enter Username" id="user_name" value={this.state.user} onChange = {event => this.setUsername(event)} required/>

                        <br/><br/>

                        <label><b>Password </b></label>
                        <input type="password" placeholder="Enter Password" id="password" value={this.state.password} onChange = {event => this.setPassword(event)} required/>

                        <br/><br/>

                        <label><b>Password again </b></label>
                        <input type="password" placeholder="Repeat password" id="re-password" value={this.state.password2} onChange = {event =>this.setPassword2(event)} required/>

                        <br/><br/>

                        <button type="submit">Register</button>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}



const mapStateToProps = state => {
    return {
        existsUser: state.get('existsUser'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (credentials) => {dispatch(registerUser(credentials))},
        setTab: (currentTab) => {dispatch(setTab(currentTab))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);