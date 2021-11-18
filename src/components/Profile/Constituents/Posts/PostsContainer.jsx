import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { addPostActionCreater, updatePostAreaActionCreater } from '../../../../Redux/reducers/profile-reducer';

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onTextareaChange: (text) => { dispatch(updatePostAreaActionCreater(text)) },
		addPost: () => dispatch(addPostActionCreater()),
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;