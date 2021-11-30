import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addMessage } from '../../Redux/reducers/messages-reducer';
import withAuthRedirectHOC from "../../hoc/withAuthRedirectHOC";
import { compose } from "redux";


const mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
	}
}

const DialogsContainer = compose(
	connect(mapStateToProps, { addMessage }),
	withAuthRedirectHOC
)(Dialogs)

export default DialogsContainer;