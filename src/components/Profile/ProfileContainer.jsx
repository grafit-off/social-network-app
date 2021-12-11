import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { addPost, getProfileThunk, updateStatusThunk } from '../../Redux/reducers/profile-reducer.js';
import { useMatch } from "react-router-dom";
import { compose } from "redux";
import { Navigate } from "react-router";

class ProfileAPI extends React.Component {
	constructor(props) {
		super(props)
		this.userId = this.props.match;
	}
	componentDidMount() {
		console.log(`Mount Start ${this.userId}`);
		if (this.props.match) {
			this.userId = this.props.match.params.userId;
		} else if (this.props.auth.isAuth) {
			this.userId = this.props.auth.userData.id;
		}
		this.props.getProfileThunk(this.userId);

		console.log(`Mount End ${this.userId}`);

	}
	componentDidUpdate() {
		console.log(`Update ${this.userId}`);
		if (this.props.match) {
			this.userId = this.props.match.params.userId;
		} else if (this.props.auth.isAuth) {
			if (this.userId !== this.props.auth.userData.id) {
				this.userId = this.props.auth.userData.id;
				this.props.getProfileThunk(this.userId);
			}
			this.userId = this.props.auth.userData.id;
		}
		console.log(`Update End ${this.userId}`);

	}
	render() {
		console.log(`Rerender ${this.userId}`);
		if (this.props.auth.isAuth || this.props.match) {
			return (
				<Profile {...this.props} />
			)
		}
		return <Navigate to="/login" />
	}
}


const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	console.log(`Match Hook ${match}`);
	return (
		<ProfileAPI {...props} match={match} />
	)
}

/* 
const ProfileHook = (props) => {
	let match = useMatch("/profile/:userId/");
	console.log(match ? match.params.userId : 'Not match');
	const [userId, setUserId] = useState(match ? match.params.userId : props.auth.userData.id);
	console.log('before eff' + userId);
	useEffect(() => {
		console.log('useEff');
		setUserId(props.auth.userData.id);
		// props.getProfileThunk(userId);
	},
		[match]);

	if (props.auth.isAuth || match) {
		return (
			<Profile {...props} />
		)
	}
	return <Navigate to="/login" />
}
 */

const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		auth: state.auth,

	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, { addPost, getProfileThunk, updateStatusThunk }),
)(ProfileMatch)


export default ProfileContainer;
