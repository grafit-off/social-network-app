import React from "react";
import FavoriteFriend from "../FavoriteFriend/FavoriteFriend";
import styles from './css/FavoriteFriends.module.css'

const FavoriteFriends = (props) => {
	let Friends = props.favoriteFriends
		.map(friend => <FavoriteFriend
			name={friend.name}
			key={friend.id}
			id={friend.id}
			avatar={friend.avatar} />);

	return (
		<div className={styles.container}>
			<h3 className={styles.heading + ' text-reset'}> Избранные друзья: </h3>
			<ul className={styles.list + ' list-reset'}>
				{Friends}
			</ul>
		</div>
	)
}

export default FavoriteFriends;