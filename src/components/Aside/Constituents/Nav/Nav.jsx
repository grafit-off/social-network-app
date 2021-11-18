import React from "react";
import { NavLink } from 'react-router-dom';
import FavoriteFriends from "../FavoriteFriends/FavoriteFriends";
import styles from './css/Nav.module.css'

const Nav = (props) => {
	return (
		<nav>
			<ul className="list-reset">
				<li className={styles.item}>
					<NavLink
						to="/profile"
						className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Мой профиль
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="/messages"
						className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Сообщения
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="/news"
						className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Новости
					</NavLink>
				</li>
				<li className={`${styles.item} `}>
					<NavLink
						to="/friends"
						className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Друзья
					</NavLink>
					<FavoriteFriends favoriteFriends={props.favoriteFriends} />
				</li>
				<li className={`${styles.item} `}>
					<NavLink
						to="/users"
						className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Пользователи
					</NavLink>
				</li>
				<li className={`${styles.item} ${styles.settings}`}>
					<NavLink
						to="/settings"
						className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Настройки
					</NavLink>
				</li>
			</ul>
		</nav >
	)
}

export default Nav;