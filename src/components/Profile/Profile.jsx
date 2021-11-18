import React from "react";
import Cover from "./Constituents/Cover/Cover";
import ProfileInfo from "./Constituents/ProfileInfo/ProfileInfo";
import PostsContainer from './Constituents/Posts/PostsContainer';

import styles from './css/Profile.module.css'

const Profile = (props) => {
	return (
		<div>
			<section >
				<div className={styles.container}>
					<Cover
						cover="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461262-reactJS-Facebook-JavaScript-minimalism-simple_background.jpg" />
					<ProfileInfo />
				</div>
			</section>
			<PostsContainer />
		</div>

	)
}

export default Profile;