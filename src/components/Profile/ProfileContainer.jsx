import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { addPost, updatePostArea, setProfile } from '../../Redux/reducers/profile-reducer.js';
import * as axios from 'axios';
import { useMatch } from "react-router-dom";

class ProfileAPI extends React.Component {
	componentDidMount() {
		let userId;
		if (this.props.match) {
			userId = this.props.match.params.userId;
		} else {
			userId = '20875'
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then((resolve) => {
				this.props.setProfile(resolve.data);
			}, (reject) => {
				this.props.setProfile('404');
			});
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


export default connect(mapStateToProps, { addPost, updatePostArea, setProfile })(ProfileMatch);
