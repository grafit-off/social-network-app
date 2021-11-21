import React from "react";
import { connect } from "react-redux";
import { followUser, setUsers, unfollowUser, setCurrentPage, setTotalUsersCount, setFetching } from "../../Redux/reducers/users-reducer";
import * as axios from "axios";
import Users from "./Users";


class UsersAPIContainer extends React.Component {
	componentDidMount() {
		if (!this.props.usersPage.usersData.length) {
			this.props.setFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then((resolve) => {
					this.props.setFetching(false);
					this.props.setUsers(resolve.data.items);
					this.props.setTotalUsersCount(resolve.data.totalCount);
				})
		}
	}

	onPageChange = (page) => {
		this.props.setFetching(true);
		this.props.setCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
			.then((resolve) => {
				this.props.setFetching(false);
				this.props.setUsers(resolve.data.items);
			})
	}

	render() {

		return <>

			<Users
				usersPage={this.props.usersPage}
				onPageChange={this.onPageChange}
				followUser={this.props.followUser}
				unfollowUser={this.props.unfollowUser}
			/>
		</>
	}
}


const mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage,
	}
}

export default connect(mapStateToProps, {
	followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, setFetching
})(UsersAPIContainer);