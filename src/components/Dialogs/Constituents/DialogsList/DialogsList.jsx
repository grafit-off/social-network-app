import React from "react";
import DialogsItem from "../DialogsItem/DialogsItem";
import styles from './css/DialogsList.module.css';

const DialogsList = (props) => {


	let dialogsItems = props.dialogsData.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar} />);

	return (
		<div className={styles.container}>
			<h2 className={styles.heading + ' text-reset'}>Ваши диалоги</h2>
			<ul className={'list-reset'}>
				{dialogsItems}
			</ul>
		</div>
	)
};

export default DialogsList;