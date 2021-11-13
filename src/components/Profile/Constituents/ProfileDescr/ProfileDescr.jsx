import React from "react";
import styles from './css/ProfileDescr.module.css'

const ProfileDescr = (props) => {
	return (
		<div className={styles.descr}>
			<h1 className={`${styles.name} text-reset`}>
				{props.name}
			</h1>
			<div className={styles.text}>
				{props.location}
			</div>
			<div className={styles.text}>
				{props.years}
			</div>
			<div className={styles.text}>
				{props.education}
			</div>
		</div>
	)
}

export default ProfileDescr;