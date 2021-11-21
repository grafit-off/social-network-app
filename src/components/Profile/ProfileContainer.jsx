import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { addPost, updatePostArea } from '../../Redux/reducers/profile-reducer.js';


const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

export default connect(mapStateToProps, { addPost, updatePostArea })(Profile);
