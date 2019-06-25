import React from 'react';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import {registerUser, setTab, existsUser} from '../../actions/actions';


class Register extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			dateOfBirth: new Date(),
			password: '',
			password2: '',
			email: '',
			isPassEqual: true,
		}
		//	this.setUsername= this.setUsername.bind(this); axreiasto afou thn exw kanei arrow function
	}


	//	anti gia handleEvent(event) pairnw ta name,value mesw destructure
	handleEvent = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	}


	registerUser = (event) => {
		event.preventDefault(); // so page will not be refreshed when submit the form
		const response = this.props.registerUser(this.state);
		existsUser(response);
		if (this.props.existsUser === true) {
			console.log('yes');
		} else {
			console.log('not');
		}
	};

	comparePasswords({target:{name, value}}){
		this.setState({[name]: value});
		const isPassEqual = this.state.password === value;
		this.setState({ isPassEqual })
	}

	render(){

		return (
			<React.Fragment>
				<div className="container">
					<div className="tabs">
						<button className="tabButtoms" onClick={() => this.props.setTab('Login')}>Login</button>
						<button className="tabButtoms">Register</button>
					</div>

					<div className="tabContent" id="Register" >
						<h2>User Registration</h2>
						<form name="registerForm" onSubmit={this.registerUser}>

							<input type="email" placeholder="Enter Email" id="email" name="email" value={this.state.email} onChange={this.handleEvent} required/>

							<br /><br />
							<input type="text" placeholder="Enter First Name" id="first_name" name="firstName" value={this.state.firstName} onChange={this.handleEvent} required/>

							<br /><br />

							<input type="text" placeholder="Enter Last Name" id="last_name" name="lastName" value={this.state.lastName} onChange={this.handleEvent} required/>

							<br /><br />
							<DatePicker
								id="dateOfBirth"
								name = "dateOfBirth"
								onChange={this.handleEvent}
								value={this.state.dateOfBirth}
							/>
							<br /><br />

							<input type="password" placeholder="Enter Password" id="password" name="password" value={this.state.password} onChange={this.handleEvent} required/>

							<br /><br />

							<input type="password" placeholder="Confirm Password" id="re-password" className={`${this.state.isPassEqual ? 'equalPasswords' : 'notEqualPasswords'}`} name="password2" value={this.state.password2} onChange = {event =>this.comparePasswords(event)} required/>

							<br /><br />

							<button type="submit" className="submitButton"><strong>Register</strong></button>
						</form>
					</div>
				</div>

			</React.Fragment>
		);
	}
}


const mapStateToProps = state => ({
	existsUser: state.get('existsUser'),
});

const mapDispatchToProps = dispatch => ({
	registerUser: (credentials) => { dispatch(registerUser(credentials)); },
	setTab: (currentTab) => { dispatch(setTab(currentTab)); },
	existsUser: (existUser) => { dispatch(existsUser(existUser)); },
});

export default connect(mapStateToProps,mapDispatchToProps)(Register);
