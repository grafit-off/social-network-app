import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Pagination from "./Constituents/Pagination/Pagination";
import User from "./Constituents/User/User";
import styles from './css/Users.module.css';

const Users = (props) => {
	let pagesCount = props.totalUsersCount / props.pageSize;
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.heading + ' text-reset'}>Пользователи</h1>
				{props.isFetching ? <Preloader /> : null}
				<Pagination
					currentPage={props.currentPage}
					pagesCount={pagesCount}
					pageSize={props.pageSize}
					onPageChange={props.onPageChange}
				/>
				<ul className={styles.list + ' list-reset'}>
					{
						props.usersData.map(user => {
							return <User
								key={user.id}
								id={user.id}
								avatar={user.photos.large}
								userName={user.name}
								followed={user.followed}
								status={user.status}
								followRequest={props.followRequest}
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