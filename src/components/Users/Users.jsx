import React from "react";
import User from "./Constituents/User/User";
import styles from './css/Users.module.css';

const Users = (props) => {
	if (!props.usersData.length) {
		props.setUsers([{
			id: 1,
			userName: 'Вадим Макеев',
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg',
			location: 'Украина, Киев',
			status: 'Привет, я веб-разработчик! Веду свой блог "Вэб подкасты", добавляйтесь в друзья!',
			followed: false
		}, {
			id: 2,
			userName: 'Соня Март',
			avatar: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg',
			location: 'Украина, Киев',
			status: 'Привет, я веб-разработчик! Веду свой блог "Вэб подкасты", добавляйтесь в друзья!',
			followed: true
		}, {
			id: 3,
			userName: 'Дмитрий Борс',
			avatar: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
			location: 'Россия, Москва',
			status: 'Привет, я веб-разработчик! Веду свой блог "Вэб подкасты", добавляйтесь в друзья!',
			followed: false
		}, {
			id: 4,
			userName: 'Андрей Круг',
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg',
			location: 'Украина, Кривой Рог',
			status: 'Привет, я веб-разработчик! Веду свой блог "Вэб подкасты", добавляйтесь в друзья!',
			followed: false
		}, {
			id: 5,
			userName: 'Настя Ковтун',
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg',
			location: 'Украина, Киев',
			status: 'Привет, я веб-разработчик! Веду свой блог "Вэб подкасты", добавляйтесь в друзья!',
			followed: true
		},
		])
	}
	let users = props.usersData.map(user => {
		return <User
			key={user.id}
			id={user.id}
			avatar={user.avatar}
			userName={user.userName}
			followed={user.followed}
			location={user.location}
			status={user.status}
			followUser={props.followUser}
			unfollowUser={props.unfollowUser}
		/>
	});

	return (
		<section>
			<div className={styles.container}>
				<h1 className={styles.heading + ' text-reset'}>Пользователи</h1>
				<ul className={styles.list + ' list-reset'}>
					{users}
				</ul>
			</div>
		</section>
	)
}

export default Users;