import React from "react";
import { NavLink } from "react-router-dom";
import styles from './css/DialogsItem.module.css';

const DialogsItem = (props) => {
	return (
		<li className={styles.item}>
			<NavLink
				to={'/messages/' + props.id}
				className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
				<img
					src={props.avatar}
					alt={'Аватарка пользователя ' + props.name} className={styles.avatar} />
				<span className={styles.name}>
					{props.name}
				</span>
			</NavLink>
		</li>
	)
};

export default DialogsItem;