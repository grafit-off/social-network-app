import React from "react";
import styles from './css/Cover.module.css'

const Cover = (props) => {
	return (
		<img src={props.cover} alt="Обложка профиля" className={styles.cover} />
	)
}

export default Cover;