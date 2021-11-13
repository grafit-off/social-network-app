import React from "react";
import MessagesItem from "../MessagesItem/MessagesItem";
import styles from './css/Messages.module.css';

const Messages = (props) => {

	let messagesItems = props.messagesData.map(message => <MessagesItem avatar={message.avatar} message={message.message} id={message.id} key={message.id} />);


	return (
		<div className={styles.messages}>
			<ul className={styles.list + ' list-reset'}>
				{messagesItems}
			</ul>
		</div>
	)
};

export default Messages;