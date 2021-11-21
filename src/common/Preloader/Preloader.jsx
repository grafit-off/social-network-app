import React from "react";
import styles from './css/Preloader.module.css';
import loadingIcon from '../../assets/images/loading.svg';


const Preloader = (props) => {
	return (
		<img
			className={styles.loadingIcon + ' loadingIcon'}
			src={loadingIcon}
			alt="Загрузка..." />
	)
}

export default Preloader;