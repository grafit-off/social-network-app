import React from "react";
import MessagesItem from "../MessagesItem/MessagesItem";
import styles from './css/Messages.module.css';

const Messages = (props) => {
	let messagesData = [
		{
			id: 1,
			message: 'Привет, ты как?1',
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
		}, {
			id: 2,
			message: 'Привет, ты как?2',
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
		}, {
			id: 3,
			message: 'Привет, ты как?3',
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
		}, {
			id: 4,
			message: 'Привет, ты как?4',
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
		},
	];
	let messagesItems = messagesData.map(message => <MessagesItem avatar={message.avatar} message={message.message} id={message.id} key={message.id} />);


	return (
		<div className={styles.messages}>
			<ul className={styles.list + ' list-reset'}>
				{messagesItems}
			</ul>
		</div>
	)
};

export default Messages;