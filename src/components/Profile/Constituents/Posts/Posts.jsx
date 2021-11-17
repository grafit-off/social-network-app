import React from "react";
import FormContainer from "../Form/FormContainer";
import Post from "../Post/Post";
import styles from './css/Posts.module.css'

const Posts = (props) => {
	let postItems = props.postsData.map(post => <Post text={post.text} likes={post.likes} id={post.id} key={post.id} />)
	return (
		<section className={styles.posts}>
			<div >
				<h2 className={`${styles.heading} text-reset`}>
					My posts
				</h2>
				<FormContainer />
				<ul className="list-reset">
					{postItems}
				</ul>
			</div>
		</section>
	)
}

export default Posts;