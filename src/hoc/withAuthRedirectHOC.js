import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

const withAuthRedirectHOC = (Component) => {
	class AuthRedirect extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to="/login" />;
			return <Component {...this.props} />
		}
	}

	const mapStateForAuthRedirectToProps = (state) => {
		return {
			isAuth: state.auth.isAuth
		}
	}

	const ConnectedAuthRedirect = connect(mapStateForAuthRedirectToProps)(AuthRedirect);
	return ConnectedAuthRedirect;
}

export default withAuthRedirectHOC;