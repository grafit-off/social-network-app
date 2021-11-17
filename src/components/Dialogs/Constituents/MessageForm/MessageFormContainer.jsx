import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreater, updataMessageAreaTextActionCreator } from '../../../../Redux/reducers/messages-reducer';
import MessageForm from "./MessageForm";

const mapStateToProps = (state) => {
	return {
		newMessageText: state.messagesPage.newMassageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => { dispatch(addMessageActionCreater()) },
		onTextareaChange: (text) => { dispatch(updataMessageAreaTextActionCreator(text)) }
	}
}

const MessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm);

export default MessageFormContainer;


/* const MessageFormContainer = (props) => {
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
}; */
