import React from "react";
import { addPostActionCreater, updatePostAreaActionCreater } from '../../../../Redux/reducers/profile-reducer';
import Form from "./Form";

const FormContainer = (props) => {
	const state = props.store.getState();

	const addPost = () => props.store.dispatch(addPostActionCreater());

	const onTextareaChange = (text) => {
		props.store.dispatch(updatePostAreaActionCreater(text));
	};

	return (
		<Form addPost={addPost} onTextareaChange={onTextareaChange} newPostText={state.profilePage.newPostText} />
	)
}

export default FormContainer;