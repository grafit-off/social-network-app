import React from "react";
import styles from './css/MessagesItem.module.css';

const MessagesItem = (props) => {
	return (
		<li className={styles.item + (props.classChange === false ? ` ${styles.rightSide}` : '')}>
			<div className={styles.authorInfo + (props.classChange === false ? ` ${styles.rightSide}` : '')}>
				<img src={props.avatar} alt="Аватарка пользователя" className={styles.avatar} />
				<span className={styles.authorName}>{props.name}</span>
			</div>
			<p className={styles.message + ' text-reset'}>
				{props.message}
			</p>
		</li>
	)
};

export default MessagesItem;