import React from "react";
import { connect } from "react-redux";
import { followUserAC, setUsersAC, unfollowUserAC } from "../../Redux/reducers/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		followUser: (id) => dispatch(followUserAC(id)),
		unfollowUser: (id) => dispatch(unfollowUserAC(id)),
		setUsers: (users) => dispatch(setUsersAC(users))
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;