import React from "react";
import { NavLink } from "react-router-dom";
import styles from './css/User.module.css';

const User = ({ avatar, userName, followRequest, id, followed, toggleFollow, status }) => {
	return (
		<li className={styles.item} >
			<div className={styles.promo}>
				<img
					src={avatar !== null ? avatar : 'https://image.flaticon.com/icons/png/512/236/236831.png'}
					alt={'Аватарка пользователя ' + userName}
					className={styles.img} />
				<button
					disabled={followRequest.some(userId => userId === id)}
					onClick={() => followed ?
						toggleFollow(id, false)
						: toggleFollow(id, true)}
					className={styles.button + " btn-reset"}>
					{followed ? 'Удалить' : 'Добавить в друзья'}
				</button>
			</div>
			<div className={styles.info}>
				<span className={styles.name}>{userName}</span>
				<p className={styles.status + ' text-reset'}>{status}</p>
			</div>
			<NavLink to={'/profile/' + id}
				className={styles.userLink + " link-reset"}
				aria-label={"Перейти к пользователю " + userName} />
		</li>
	)
}

export default User;