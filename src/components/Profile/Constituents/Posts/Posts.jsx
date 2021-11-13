import React from "react";
import Form from "../Form/Form";
import Post from "../Post/Post";
import styles from './css/Posts.module.css'

const Posts = () => {
	return (
		<section className={styles.posts}>
			<div >
				<h2 className={`${styles.heading} text-reset`}>
					My posts
				</h2>
				<Form />
				<ul className="list-reset">
					<li className={styles.item}>
						<Post text="1 saasd sad " likes="1" />
					</li>
					<li className={styles.item}>
						<Post text="2 saasd sad " likes="10" />
					</li>
					<li className={styles.item}>
						<Post text="3 saasd sad " likes="54" />
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Posts;