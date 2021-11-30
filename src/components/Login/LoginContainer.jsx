import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { userLoginThunk } from '../../Redux/reducers/auth-reducer.js'
import { Navigate } from 'react-router';

class LoginContainer extends React.Component {
	login = (data, actions) => {
		this.props.userLoginThunk(data, actions);
	}
	render() {
		if (this.props.auth.isAuth) return <Navigate to="/profile" />
		return <Login login={this.login} captcha={this.props.auth.captcha ? this.props.auth.captcha : false} />
	}
}

const mstp = (state) => ({ auth: state.auth });

export default connect(mstp, { userLoginThunk })(LoginContainer);
