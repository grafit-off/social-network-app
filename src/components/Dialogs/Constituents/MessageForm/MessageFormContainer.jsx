import React from "react";
import { addMessageActionCreater, updataMessageAreaTextActionCreator } from '../../../../Redux/reducers/messages-reducer';
import MessageForm from "./MessageForm";

const MessageFormContainer = (props) => {
	const state = props.store.getState();

	const sendMessage = () => props.store.dispatch(addMessageActionCreater());

	const onTextareaChange = (text) => {
		props.store.dispatch(updataMessageAreaTextActionCreator(text));
	}
	return (
		<MessageForm
			newMessageText={state.messagesPage.newMassageText}
			sendMessage={sendMessage} onTextareaChange={onTextareaChange} />
	)
};

export default MessageFormContainer;