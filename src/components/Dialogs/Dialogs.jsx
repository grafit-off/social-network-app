import React from "react";
import DialogsList from "./Constituents/DialogsList/DialogsList";
import Messages from "./Constituents/MessagesBlock/MessagesBlock";
import styles from './css/Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<section>
			<div className={styles.container}>
				<h1 className={styles.heading + " text-reset"}>Сообщения</h1>
				<div className={styles.row}>
					<DialogsList dialogsData={props.state.dialogsData} />
					<Messages messagesData={props.state.messagesData} newMassageText={props.state.newMassageText} addMessage={props.addMessage} updateMessageText={props.updateMessageText} />
				</div>
			</div>
		</section>
	)
};

export default Dialogs;