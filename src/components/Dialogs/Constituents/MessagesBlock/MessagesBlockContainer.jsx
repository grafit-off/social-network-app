import React from "react";
import MessagesBlock from "./MessagesBlock";
import { addMessage, updataMessageAreaText } from '../../../../Redux/reducers/messages-reducer';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		messagesData: state.messagesPage.messagesData,
		newMessageText: state.messagesPage.newMassageText
	}
}

const MessagesBlockContainer = connect(mapStateToProps, { addMessage, updataMessageAreaText })(MessagesBlock);

export default MessagesBlockContainer;