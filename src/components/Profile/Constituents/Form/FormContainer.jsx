import React from "react";
import { addPostActionCreater, updatePostAreaActionCreater } from '../../../../Redux/reducers/profile-reducer';
import StoreContext from "../../../../StoreContext";
import Form from "./Form";


const FormContainer = (props) => {
	return <StoreContext.Consumer>
		{
			(store) => {
				const state = store.getState();
				const addPost = () => store.dispatch(addPostActionCreater());
				const onTextareaChange = (text) => {
					store.dispatch(updatePostAreaActionCreater(text));
				};
				return (
					<Form addPost={addPost} onTextareaChange={onTextareaChange} newPostText={state.profilePage.newPostText} />
				)
			}
		}
	</StoreContext.Consumer>

}

export default FormContainer;