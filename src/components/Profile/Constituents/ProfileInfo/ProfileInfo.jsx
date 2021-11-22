import React from "react";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import ProfileDescr from "../ProfileDescr/ProfileDescr";
import styles from './css/ProfileInfo.module.css';
import avatar from '../../../../assets/images/user.jpg';

const ProfileInfo = (props) => {
	return (
		<div className={styles.info}>
			<ProfileAvatar
				img={props.profile.photos.large ? props.profile.photos.large : avatar}
			/>
			<ProfileDescr
				profile={props.profile} />
		</div>
	)
}

export default ProfileInfo;