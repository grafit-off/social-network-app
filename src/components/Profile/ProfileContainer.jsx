import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { addPost, updatePostArea, getProfileThunk } from '../../Redux/reducers/profile-reducer.js';
import { useMatch } from "react-router-dom";
import withAuthRedirectHOC from "../../hoc/withAuthRedirectHOC";
import { compose } from "redux";

class ProfileAPI extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '20875';
		this.props.getProfileThunk(userId);
	}
	render() {
		return (
			<Profile {...this.props} />
		)
	}
}

const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileAPI {...props} match={match} />
	)
}

const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, { addPost, updatePostArea, getProfileThunk }),
	withAuthRedirectHOC,
)(ProfileMatch)


export default ProfileContainer;
