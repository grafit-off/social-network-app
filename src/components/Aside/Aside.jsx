import React from "react";
import styles from './css/Aside.module.css'

import Nav from "./Constituents/Nav/Nav";

const Aside = (props) => {
	return (
		<aside className={`app__aside ${styles.aside}`}>
			<div>
				<Nav favoriteFriends={props.state.favoriteFriends} />
			</div>
		</aside>
	)
}

export default Aside;