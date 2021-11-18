import React from "react";
import MessagesBlock from "./MessagesBlock";
import { addMessageActionCreater, updataMessageAreaTextActionCreator } from '../../../../Redux/reducers/messages-reducer';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		messagesData: state.messagesPage.messagesData,
		newMessageText: state.messagesPage.newMassageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => { dispatch(addMessageActionCreater()) },
		onTextareaChange: (text) => { dispatch(updataMessageAreaTextActionCreator(text)) }
	}
}

const MessagesBlockContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesBlock);

export default MessagesBlockContainer;