import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Pagination from "./Constituents/Pagination/Pagination";
import User from "./Constituents/User/User";
import styles from './css/Users.module.css';

const Users = (props) => {
	let pagesCount = props.usersPage.totalUsersCount / props.usersPage.pageSize;
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.heading + ' text-reset'}>Пользователи</h1>
				{props.usersPage.isFetching ? <Preloader /> : null}
				<Pagination
					currentPage={props.usersPage.currentPage}
					pagesCount={pagesCount}
					pageSize={props.usersPage.pageSize}
					onPageChange={props.onPageChange}
				/>
				<ul className={styles.list + ' list-reset'}>
					{
						props.usersPage.usersData.map(user => {
							return <User
								key={user.id}
								id={user.id}
								avatar={user.photos.large}
								userName={user.name}
								followed={user.followed}
								status={user.status}
								followRequest={props.usersPage.followRequest}
								followUser={props.followUser}
								unfollowUser={props.unfollowUser}
							/>
						})
					}
				</ul>
			</div>
		</section>
	)
}

export default Users;