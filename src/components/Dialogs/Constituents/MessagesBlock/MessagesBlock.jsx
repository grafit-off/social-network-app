import React from "react";
import MessageFormContainer from "../MessageForm/MessageFormContainer";
import MessagesItem from "../MessagesItem/MessagesItem";
import styles from './css/MessagesBlock.module.css';

const MessagesBlock = (props) => {

	let messagesItems = props.messagesData
		.map((el, i, arr) => {
			return <MessagesItem
				avatar={el.avatar}
				message={el.message}
				name={el.name}
				id={el.id}
				classChange={el.name === arr[0].name ? true : false}
				key={el.id} />
		});


	return (
		<div className={styles.messages}>
			<ul className={styles.list + ' list-reset'}>
				{messagesItems}
			</ul>
			<MessageFormContainer store={props.store} />
		</div>
	)
};

export default MessagesBlock;