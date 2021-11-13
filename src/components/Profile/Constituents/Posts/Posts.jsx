import React from "react";
import Form from "../Form/Form";
import Post from "../Post/Post";
import styles from './css/Posts.module.css'

const Posts = () => {
	let postsData = [
		{
			id: 1,
			text: '1 saasd sad',
			likes: 1
		}, {
			id: 2,
			text: '2 saasd sad',
			likes: 10
		}, {
			id: 3,
			text: '3 saasd sad',
			likes: 57
		},
	];

	let postItems = postsData.map(post => <Post text={post.text} likes={post.likes} id={post.id} key={post.id} />)

	return (
		<section className={styles.posts}>
			<div >
				<h2 className={`${styles.heading} text-reset`}>
					My posts
				</h2>
				<Form />
				<ul className="list-reset">
					{postItems}
				</ul>
			</div>
		</section>
	)
}

export default Posts;