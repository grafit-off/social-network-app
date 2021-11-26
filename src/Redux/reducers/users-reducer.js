import { usersAPI } from "../../api/api";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FETCHING = 'SET-FETCHING';
const SET_FOLLOW_REQUEST = 'SET_FOLLOW_REQUEST';

const initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followRequest: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_USER: {
			return {
				...state,
				usersData: state.usersData.map((user) => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: true
						}
					}
					return user;
				})
			}
		}

		case UNFOLLOW_USER: {
			return {
				...state,
				usersData: state.usersData.map((user) => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: false
						}
					}
					return user;
				})
			}
		}

		case SET_USERS: {
			return {
				...state,
				usersData: action.users
			}
		}

		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}

		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}
		}

		case SET_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}

		case SET_FOLLOW_REQUEST: {
			return {
				...state,
				followRequest: action.isFollowRequest
					? [...state.followRequest, action.followRequestId]
					: state.followRequest.filter((id) => id != action.followRequestId)
			}
		}

		default:
			return state;
	}
};

export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching });
export const setFollowRequest = (isFollowRequest, followRequestId) => ({ type: SET_FOLLOW_REQUEST, isFollowRequest, followRequestId });

export const getUsersThunk = (page, pageSize) => {
	return (dispatch) => {
		dispatch(setFetching(true));
		dispatch(setCurrentPage(page));
		usersAPI.getUsers(page, pageSize)
			.then((response) => {
				dispatch(setFetching(false));
				dispatch(setUsers(response.items));
				dispatch(setTotalUsersCount(response.totalCount));
			})
	}
}

export const followUserThunk = (userId) => {
	return (dispatch) => {
		dispatch(setFollowRequest(true, userId));
		usersAPI.toggleFollow(userId, true)
			.then((resolve) => {
				dispatch(setFollowRequest(false, userId));
				if (resolve.resultCode === 0) {
					dispatch(followUser(userId));
				}
			}).catch((error) => console.log(error))
	}
}

export const unfollowUserThunk = (userId) => {
	return (dispatch) => {
		dispatch(setFollowRequest(userId));
		usersAPI.toggleFollow(userId, false)
			.then((resolve) => {
				dispatch(setFollowRequest(false, userId));
				if (resolve.resultCode === 0) {
					dispatch(unfollowUser(userId));
				}
			}).catch((error) => console.log(error))
	}
}

export default usersReducer;