import React from "react";
import styles from './css/Post.module.css'

const Post = (props) => {
	return (
		<li className={styles.item}>
			<article className={styles.post}>
				<div className={styles.body}>
					<div className={styles.image}>
						<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--JIe3p0M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/093ewdrgyf1kedlhzs51.png" alt="Аватарка" className={styles.avatar} />
					</div>
					<p className={`${styles.text} text-reset`}>{props.text}</p>
				</div>
				<div className={styles.likes}>Likes <span className={styles.amount}>{props.likes}</span></div>
			</article>
		</li>
	)
}

export default Post;