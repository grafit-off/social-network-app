import React from "react";
import Cover from "./Constituents/Cover/Cover";
import ProfileInfo from "./Constituents/ProfileInfo/ProfileInfo";
import Posts from './Constituents/Posts/Posts';
import styles from './css/Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import coverImg from '../../assets/images/cover.jpg';

const Profile = (props) => {
	if (!props.profilePage.profile) {
		return (
			<Preloader />
		)
	} else if (props.profilePage.profile === '404') {
		return <h1>Такого пользователя не существует</h1>
	}

	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<Cover
						cover={coverImg} />
					<ProfileInfo
						profile={props.profilePage.profile}
						status={props.profilePage.status}
						updateStatusThunk={props.updateStatusThunk}
					/>
				</div>
			</section>
			<Posts
				postsData={props.profilePage.postsData}
				addPost={props.addPost} />
		</>
	)
}

export default Profile;