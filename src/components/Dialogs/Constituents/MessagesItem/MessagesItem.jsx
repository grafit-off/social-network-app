import React from "react";
import styles from './css/MessagesItem.module.css';

const MessagesItem = (props) => {
	return (
		<li className={styles.item}>
			<img src={props.avatar} alt="Аватарка пользователя" className={styles.avatar} />
			<p className={styles.message + ' text-reset'}>
				{props.message}
			</p>
		</li>
	)
};

export default MessagesItem;