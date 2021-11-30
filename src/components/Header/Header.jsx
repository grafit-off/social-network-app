import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './css/Header.module.css';
import logo from '../../assets/images/cover.jpg';

const Header = (props) => {
	return (
		<header className={`app__header ${styles.header}`}>
			<div className={styles.container}>
				<a href="/" className={`${styles.logo} link-reset`}>
					<img src={logo} alt="Логотип" className={styles.img} />
				</a>
				{props.user.isAuth
					? <div className={styles.loginBlock}>
						<NavLink to="/profile" className={styles.link + ' link-reset'}>{props.user.userData.login}</NavLink>
						<button onClick={props.logout} className={styles.btn + ' btn-reset'}>Выйти</button>
					</div>
					: <NavLink to='/login' className={styles.link + ' link-reset'}>Войти</NavLink>}
			</div>
		</header>
	)
}

export default Header;