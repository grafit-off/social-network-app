import React from "react";
import styles from './css/Footer.module.css'

const Footer = () => {
	return (
		<footer className={`app__footer ${styles.footer}`}>
			<div className={styles.container}>
				<small className={styles.copy}>
					Copyright, 2021
				</small>
			</div>
		</footer>
	)
}

export default Footer;
