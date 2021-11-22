import React from "react";
import styles from './css/Header.module.css';
import logo from '../../assets/images/cover.jpg';

const Header = () => {
	return (
		<header className={`app__header ${styles.header}`}>
			<div >
				<a href="/" className={`${styles.logo} link-reset`}>
					<img src={logo} alt="Логотип" className={styles.img} />
				</a>
			</div>
		</header>
	)
}

export default Header;