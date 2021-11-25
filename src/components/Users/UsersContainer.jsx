import React from "react";
import { connect } from "react-redux";
import {
	followUserThunk, unfollowUserThunk, getUsersThunk
} from "../../Redux/reducers/users-reducer";
import Users from "./Users";


class UsersAPIContainer extends React.Component {
	componentDidMount() {
		if (!this.props.usersPage.usersData.length) {
			this.props.getUsersThunk(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
		}
	}

	onPageChange = (page) => {
		this.props.getUsersThunk(page, this.props.usersPage.pageSize);
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
				usersPage={this.props.usersPage}
				onPageChange={this.onPageChange}
				followUser={this.followUser}
				unfollowUser={this.unfollowUser}
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
	getUsersThunk, followUserThunk, unfollowUserThunk
})(UsersAPIContainer);