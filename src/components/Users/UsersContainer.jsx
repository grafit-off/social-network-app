import React from "react";
import { connect } from "react-redux";
import {
	toggleFollowUserThunk, getUsersThunk
} from "../../Redux/reducers/users-reducer";
import { getCurrentPage, getFollowRequest, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/reducers/users-selector";
import Users from "./Users";



class UsersAPIContainer extends React.Component {
	componentDidMount() {
		if (!this.props.usersData.length) {
			const { currentPage, pageSize } = this.props;
			this.props.getUsersThunk(currentPage, pageSize);
		}
	}

	onPageChange = (page) => {
		const { pageSize } = this.props;
		this.props.getUsersThunk(page, pageSize);
	}

	toggleFollow = (userId, follow) => {
		this.props.toggleFollowUserThunk(userId, follow);
	}

	render() {
		return <>
			<Users
				{...this.props}
				onPageChange={this.onPageChange}
				toggleFollow={this.toggleFollow}
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
	getUsersThunk, toggleFollowUserThunk
})(UsersAPIContainer);