import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserDataThunk, userLogoutThunk } from '../../Redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getUserDataThunk();
	}

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

export default connect(mapStateToProps, { getUserDataThunk, userLogoutThunk })(HeaderContainer);