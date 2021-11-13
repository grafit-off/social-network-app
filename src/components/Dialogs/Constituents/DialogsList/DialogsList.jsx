import React from "react";
import { NavLink } from "react-router-dom";
import styles from './css/DialogsList.module.css';

const DialogsList = (props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.heading + ' text-reset'}>Ваши диалоги</h2>
			<ul className={'list-reset'}>
				<li className={styles.item}>
					<NavLink to="/messages/1" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="" className={styles.avatar} />
						<span className={styles.name}>
							Вадим Макеев
						</span>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to="/messages/2" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="" className={styles.avatar} />
						<span className={styles.name}>
							Дмитрий Борс
						</span>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to="/messages/3" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="" className={styles.avatar} />
						<span className={styles.name}>
							София Весна
						</span>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to="/messages/4" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						<img src="https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg" alt="" className={styles.avatar} />
						<span className={styles.name}>
							Рита Март
						</span>
					</NavLink>
				</li>
			</ul>
		</div>
	)
};

export default DialogsList;