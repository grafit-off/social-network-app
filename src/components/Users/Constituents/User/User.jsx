import React from "react";
import { NavLink } from "react-router-dom";
import styles from './css/User.module.css';

const User = (props) => {


	return (
		<li className={styles.item} >
			<div className={styles.promo}>
				<img
					src={props.avatar !== null ? props.avatar : 'https://image.flaticon.com/icons/png/512/236/236831.png'}
					alt={'Аватарка пользователя ' + props.userName}
					className={styles.img} />
				{
					props.followed ?
						<button
							onClick={() => props.unfollowUser(props.id)}
							className={styles.button + " btn-reset"}>Удалить</button>
						: <button
							onClick={() => props.followUser(props.id)}
							className={styles.button + " btn-reset"}>Добавить в друзья</button>
				}
			</div>
			<div className={styles.info}>
				<span className={styles.name}>{props.userName}</span>
				<span className={styles.location}>{props.location}</span>
				<p className={styles.status + ' text-reset'}>{props.status}</p>
			</div>
			<NavLink to={'/profile/' + props.id} className={styles.userLink + " link-reset"} aria-label={"Перейти к пользователю " + props.userName}></NavLink>
		</li>
	)
}

export default User;