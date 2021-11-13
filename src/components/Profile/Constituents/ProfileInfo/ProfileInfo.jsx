import React from "react";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import ProfileDescr from "../ProfileDescr/ProfileDescr";
import styles from './css/ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={styles.info}>
			<ProfileAvatar img="https://res.cloudinary.com/practicaldev/image/fetch/s--JIe3p0M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/093ewdrgyf1kedlhzs51.png" />
			<ProfileDescr name="Николай Чёрный" years="21 год" location="Украина, Киев" education="Национальный Авиационный Университет" />
		</div>
	)
}

export default ProfileInfo;