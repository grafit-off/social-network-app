import React from "react";
import styles from './css/Messages.module.css';

const Messages = (props) => {
	return (
		<div className={styles.messages}>
			<ul className={styles.list + ' list-reset'}>
				<li className={styles.item}>
					<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="Аватарка собеседника" className={styles.avatar} />
					<p className={styles.message + ' text-reset'}>
						Привет! Как ты?
					</p>
				</li>
				<li className={styles.item}>
					<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="Аватарка собеседника" className={styles.avatar} />
					<p className={styles.message + ' text-reset'}>
						Привет! Как ты? 2
					</p>
				</li>
				<li className={styles.item}>
					<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="Аватарка собеседника" className={styles.avatar} />
					<p className={styles.message + ' text-reset'}>
						Привет! Как ты? 3
					</p>
				</li>
				<li className={styles.item}>
					<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="Аватарка собеседника" className={styles.avatar} />
					<p className={styles.message + ' text-reset'}>
						Привет! Как ты? 4
					</p>
				</li>
			</ul>
		</div>
	)
};

export default Messages;