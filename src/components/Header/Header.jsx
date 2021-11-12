import React from "react";
import './css/Header.css'

function Header() {
	return (
		<header className="app__header header">
			<div className="header__container ">
				<a href="/" className="header__logo link-reset">
					<img src="https://www.pngaaa.com/api-download/2507930" alt="Логотип" className="header__img" />
				</a>
			</div>
		</header>
	)
}

export default Header;