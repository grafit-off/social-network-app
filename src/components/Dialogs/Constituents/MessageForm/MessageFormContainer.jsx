import React from "react";
import { addMessageActionCreater, updataMessageAreaTextActionCreator } from '../../../../Redux/reducers/messages-reducer';
import StoreContext from "../../../../StoreContext";
import MessageForm from "./MessageForm";

const MessageFormContainer = (props) => {
	return <StoreContext.Consumer>
		{
			(store) => {
				const state = store.getState();
				const sendMessage = () => store.dispatch(addMessageActionCreater());
				const onTextareaChange = (text) => {
					store.dispatch(updataMessageAreaTextActionCreator(text));
				}
				return (
					<MessageForm
						newMessageText={state.messagesPage.newMassageText}
						sendMessage={sendMessage} onTextareaChange={onTextareaChange} />
				)
			}
		}
	</StoreContext.Consumer>
};

export default MessageFormContainer;