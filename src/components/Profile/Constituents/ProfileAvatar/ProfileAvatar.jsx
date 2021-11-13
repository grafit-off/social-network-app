import React from "react";
import styles from './css/ProfileAvatar.module.css'

const ProfileAvatar = (props) => {
	return (
		<div className={styles.avatar}>
			<img src={props.img} alt="Аватарка" className={styles.img} />
		</div>
	)
}

export default ProfileAvatar;