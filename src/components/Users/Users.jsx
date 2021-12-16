import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Pagination from "../../common/Pagination/Pagination";
import User from "./Constituents/User/User";
import styles from './css/Users.module.css';

const Users = ({ totalUsersCount, pageSize, isFetching, currentPage,
	onPageChange, usersData, followRequest, toggleFollow }) => {

	let pagesCount = totalUsersCount / pageSize;
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.heading + ' text-reset'}>Пользователи</h1>
				{isFetching ? <Preloader /> : null}
				<Pagination
					currentPage={currentPage}
					pagesCount={pagesCount}
					pageSize={pageSize}
					onPageChange={onPageChange}
				/>
				<ul className={styles.list + ' list-reset'}>
					{
						usersData.map(user => {
							return <User
								key={user.id}
								id={user.id}
								avatar={user.photos.large}
								userName={user.name}
								followed={user.followed}
								status={user.status}
								followRequest={followRequest}
								toggleFollow={toggleFollow}
							/>
						})
					}
				</ul>
			</div>
		</section>
	)
}

export default Users;