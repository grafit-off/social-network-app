import React from "react";
import './css/Profile.css'

function Profile() {
	return (
		<section className="profile">
			<div className="profile__container ">
				<img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461262-reactJS-Facebook-JavaScript-minimalism-simple_background.jpg" alt="Обложка профиля" className="profile__cover" />
				<div className="profile__info">
					<div className="profile__image">
						<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--JIe3p0M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/093ewdrgyf1kedlhzs51.png" alt="" className="profile__avatar" />
					</div>
					<div className="profile__descr">
						<h1 className="profile__name text-reset">
							Mykola Chernyi
						</h1>
						<div className="profile__text">
							Ukraine, Kyiv
						</div>
						<div className="profile__text">
							21 y.o.
						</div>
						<div className="profile__text">
							National Aviation University
						</div>
					</div>
				</div>
				<div className="profile__posts posts">
					<h2 className="posts__heading text-reset">
						My posts
					</h2>
				</div>
			</div>
		</section>
	)
}

export default Profile;