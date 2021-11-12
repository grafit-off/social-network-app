import React from "react";
import styles from './css/Aside.module.css'

function Aside() {
	return (
		<aside className="app__aside aside">
			<div className="aside__container ">
				<nav className="aside__nav nav">
					<ul className="nav__list list-reset">
						<li className="nav__item">
							<a href="#s" className="nav__link link-reset">Home</a>
						</li>
						<li className="nav__item">
							<a href="#s" className="nav__link link-reset">Messages</a>
						</li>
						<li className="nav__item">
							<a href="#s" className="nav__link link-reset">News</a>
						</li>
						<li className="nav__item nav__item--settings">
							<a href="#s" className="nav__link link-reset">Settings</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	)
}

export default Aside;