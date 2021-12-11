import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { userLogoutThunk } from '../../Redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {
	logout = () => {
		this.props.userLogoutThunk();
	}

	render() {
		return <Header user={this.props.auth} logout={this.logout} />
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, { userLogoutThunk })(HeaderContainer);