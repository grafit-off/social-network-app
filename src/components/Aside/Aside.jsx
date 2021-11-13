import React from "react";
import styles from './css/Aside.module.css'

import Nav from "../Nav/Nav";

const Aside = () => {
	return (
		<aside className={`app__aside ${styles.aside}`}>
			<div>
				<Nav />
			</div>
		</aside>
	)
}

export default Aside;