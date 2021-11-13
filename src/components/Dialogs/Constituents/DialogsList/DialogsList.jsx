import React from "react";
import DialogsItem from "../DialogsItem/DialogsItem";
import styles from './css/DialogsList.module.css';

const DialogsList = (props) => {
	let dialogsData = [{
		id: 1,
		name: 'Вадим Макеев',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 2,
		name: 'Дмитрий Борс',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 3,
		name: 'София Весна',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 4,
		name: 'Рита Март',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}
	];

	let dialogsItems = dialogsData.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar} />);

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