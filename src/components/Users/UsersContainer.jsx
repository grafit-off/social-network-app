import React from "react";
import { connect } from "react-redux";
import {
	followUserThunk, unfollowUserThunk, getUsersThunk
} from "../../Redux/reducers/users-reducer";
import { getCurrentPage, getFollowRequest, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/reducers/users-selector";
import Users from "./Users";



class UsersAPIContainer extends React.Component {
	componentDidMount() {
		if (!this.props.usersData.length) {
			this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
		}
	}

	onPageChange = (page) => {
		this.props.getUsersThunk(page, this.props.pageSize);
	}

	followUser = (userId) => {
		this.props.followUserThunk(userId);
	}

	unfollowUser = (userId) => {
		this.props.unfollowUserThunk(userId);
	}

	render() {
		return <>
			<Users
				{...this.props}
				onPageChange={this.onPageChange}
				followUser={this.followUser}
				unfollowUser={this.unfollowUser}
			/>
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		usersData: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followRequest: getFollowRequest(state)
	}
}

export default connect(mapStateToProps, {
	getUsersThunk, followUserThunk, unfollowUserThunk
})(UsersAPIContainer);