import React from 'react';
import { connect } from 'react-redux';
import { loginUser, setTab } from '../../actions/actions';


class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: '',
			password: '',
		};
	}


	setUsername(event) {
		this.setState({ user: event.target.value });
	}

	setPassword(event) {
		this.setState({ password: event.target.value });
	}

	loginUser = (event) => {
		event.preventDefault(); // so page will not be refreshed when submit the form
		this.props.loginUser(this.state);
	};

	render() {
		return (
			<React.Fragment>
				<div className="container">

					<div className="tabs">
						<button type="button" className="tabButtoms">Login</button>
						<button type="button" className="tabButtoms" onClick={() => this.props.setTab('Register')}>Register</button>
					</div>

					<div className="tabContent" id="Login">

						<h2>User Login</h2>
						<form name="loginForm" onSubmit={this.loginUser}>
							<input type="text" placeholder="Enter Username" id="user_name" value={this.state.user} onChange={event => this.setUsername(event)} required/>
							<br />
							<br />
							<input type="password" placeholder="Enter Password" id="password" value={this.state.password} onChange={event => this.setPassword(event)} required/>

							<br />
							<br />

							<button type="submit" className="submitButton"><strong>Login</strong></button>
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
	loginUser: (credentials) => { dispatch(loginUser(credentials)); },
	setTab: (currentTab) => { dispatch(setTab(currentTab)); },
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
