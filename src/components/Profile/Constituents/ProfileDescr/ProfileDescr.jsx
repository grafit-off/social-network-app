import React from "react";
import styles from './css/ProfileDescr.module.css'

const ProfileDescr = (props) => {
	const about = () => {
		if (props.profile.aboutMe) {
			return (
				<p className={styles.about + " text-reset"}>
					{props.profile.aboutMe}
				</p>
			)
		}
	}

	const work = () => {
		if (props.profile.lookingForAJob) {
			return (
				<p className={styles.work + " text-reset"}>
					{props.profile.lookingForAJob ? "В поиске работы" : ''}
				</p>
			)
		}
	}

	const workDescr = () => {
		if (props.profile.lookingForAJobDescription) {
			return (
				<p className={styles.workDescr + " text-reset"}>
					{props.profile.lookingForAJobDescription}
				</p>
			)
		}
	}

	const contacts = () => {
		let contactsArr = [];
		for (const key in props.profile.contacts) {
			if (props.profile.contacts[key]) {
				contactsArr.push(
					<li className={styles.item} key={key}>
						<a href={`https://` + props.profile.contacts[key]} className={styles.link + ' link-reset'} target='_blank' rel="noopener noreferrer nofollow">{key}</a>
					</li>)
			}
		}
		return (
			<ul className={styles.contacts + ' list-reset'}>
				{contactsArr}
			</ul>
		)
	}

	return (
		<div className={styles.descr}>
			<div className={styles.info}>
				<h1 className={`${styles.name} text-reset`}>
					{props.profile.fullName}
				</h1>
				{about()}
				{work()}
				{workDescr()}
			</div>
			{contacts()}
		</div>
	)
}

export default ProfileDescr;