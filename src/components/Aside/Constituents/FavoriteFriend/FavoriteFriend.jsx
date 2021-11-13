import React from "react";
import styles from './css/FavoriteFriend.module.css';

const FavoriteFriend = (props) => {

	return (
		<li className={styles.friend}>
			<img src={props.avatar} alt={'Аватарка друга ' + props.name} className={styles.avatar} />
			<span className={styles.name}>{props.name}</span>
		</li>
	)
};

export default FavoriteFriend;