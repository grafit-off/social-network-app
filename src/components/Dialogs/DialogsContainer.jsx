import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addMessage, updataMessageAreaText } from '../../Redux/reducers/messages-reducer';
import withAuthRedirectHOC from "../../hoc/withAuthRedirectHOC";
import { compose } from "redux";


const mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
	}
}

const DialogsContainer = compose(
	connect(mapStateToProps, { addMessage, updataMessageAreaText }),
	withAuthRedirectHOC
)(Dialogs)

export default DialogsContainer;