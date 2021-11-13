import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './css/Nav.module.css'

const Nav = () => {
	return (
		<nav>
			<ul className="list-reset">
				<li className={styles.item}>
					<NavLink to="/profile" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Мой профиль
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to="/messages" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Сообщения
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink to="/news" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Новости
					</NavLink>
				</li>
				<li className={`${styles.item} ${styles.settings}`}>
					<NavLink to="/settings" className={navData => `${styles.link} link-reset ` + (navData.isActive ? styles.active : '')}>
						Настройки
					</NavLink>
				</li>
			</ul>
			{/* className={navData => navData.isActive ? `${styles.link} ${styles.active} link-reset` : `${styles.link} link-reset`}> */}
		</nav >
	)
}

export default Nav;