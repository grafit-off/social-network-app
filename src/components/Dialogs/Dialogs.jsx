import React from "react";
import DialogsList from "./Constituents/DialogsList/DialogsList";
import MessagesBlockContainer from "./Constituents/MessagesBlock/MessagesBlockContainer";
import styles from './css/Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<section>
			<div className={styles.container}>
				<h1 className={styles.heading + " text-reset"}>Сообщения</h1>
				<div className={styles.row}>
					<DialogsList dialogsData={props.state.dialogsData} />
					<MessagesBlockContainer />
				</div>
			</div>
		</section>
	)
};

export default Dialogs;