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
				<div className={styles.loginBlock}>
					{props.user.isAuth ? <NavLink to="/profile" className={styles.link + ' link-reset'}>{props.user.userData.login}</NavLink> : <NavLink to='/login' className={styles.link + ' link-reset'}>Войти</NavLink>}
				</div>
			</div>
		</header>
	)
}

export default Header;