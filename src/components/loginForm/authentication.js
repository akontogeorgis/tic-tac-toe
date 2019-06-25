import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Register from './register';


function Authentication(props) {
	switch (props.currentTab) {
		case 'Login':
			return <Login />;

		case 'Register':
			return <Register />;

		default:
			return <Login />;
	}
}

const mapStateToProps = state => ({
	currentTab: state.get('currentTab'),
});

export default connect(mapStateToProps)(Authentication);
