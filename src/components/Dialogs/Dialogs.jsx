import React from "react";
import DialogsList from "./Constituents/DialogsList/DialogsList";
import MessagesBlock from "./Constituents/MessagesBlock/MessagesBlock";
import styles from './css/Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<section>
			<div className={styles.container}>
				<h1 className={styles.heading + " text-reset"}>Сообщения</h1>
				<div className={styles.row}>
					<DialogsList dialogsData={props.messagesPage.dialogsData} />
					<MessagesBlock
						newMessageText={props.messagesPage.newMessageText}
						addMessage={props.addMessage}
						updataMessageAreaText={props.updataMessageAreaText}
						messagesData={props.messagesPage.messagesData} />
				</div>
			</div>
		</section>
	)
};

export default Dialogs;