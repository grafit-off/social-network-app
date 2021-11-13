import React from "react";
import styles from './css/Header.module.css'

const Header = () => {
	return (
		<header className={`app__header ${styles.header}`}>
			<div >
				<a href="/" className={`${styles.logo} link-reset`}>
					<img src="https://www.pngaaa.com/api-download/2507930" alt="Логотип" className={styles.img} />
				</a>
			</div>
		</header>
	)
}

export default Header;