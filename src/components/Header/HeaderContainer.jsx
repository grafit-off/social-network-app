import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserDataThunk } from '../../Redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getUserDataThunk();
	}
	render() {
		return <Header user={this.props.auth} />
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, { getUserDataThunk })(HeaderContainer);