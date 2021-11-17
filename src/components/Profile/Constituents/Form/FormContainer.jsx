import React from "react";
import { connect } from "react-redux";
import { addPostActionCreater, updatePostAreaActionCreater } from '../../../../Redux/reducers/profile-reducer';
// import StoreContext from "../../../../StoreContext";
import Form from "./Form";

const mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTextareaChange: (text) => { dispatch(updatePostAreaActionCreater(text)) },
		addPost: () => dispatch(addPostActionCreater()),
	}
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer;
