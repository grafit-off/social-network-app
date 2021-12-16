import { usersAPI } from "../../api/api";
import { objectHelper } from "../../utils/object-helpers";

// Action Types
const TOGGLE_FOLLOW_USER = 'social-network/users-reducer/TOGGLE_FOLLOW_USER';
const SET_USERS = 'social-network/users-reducer/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users-reducer/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users-reducer/SET-TOTAL-USERS-COUNT';
const SET_FETCHING = 'social-network/users-reducer/SET-FETCHING';
const SET_FOLLOW_REQUEST = 'social-network/users-reducer/SET_FOLLOW_REQUEST';
// -- //

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
		case TOGGLE_FOLLOW_USER: {
			return {
				...state,
				usersData: objectHelper(state.usersData, action.userId, 'id', { followed: action.follow })
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

// Actions Creators
export const toggleFollowUser = (userId, follow) => ({ type: TOGGLE_FOLLOW_USER, userId, follow });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching });
export const setFollowRequest = (isFollowRequest, followRequestId) => ({ type: SET_FOLLOW_REQUEST, isFollowRequest, followRequestId });
// -- //

// Thunks Creators
export const getUsersThunk = (page, pageSize) => {
	return async (dispatch) => {
		dispatch(setFetching(true));
		dispatch(setCurrentPage(page));
		let response = await usersAPI.getUsers(page, pageSize);
		dispatch(setFetching(false));
		dispatch(setUsers(response.items));
		dispatch(setTotalUsersCount(response.totalCount));
	}
}

export const toggleFollowUserThunk = (userId, follow) => {
	return async (dispatch) => {
		dispatch(setFollowRequest(true, userId));
		let response = await usersAPI.toggleFollow(userId, follow);
		dispatch(setFollowRequest(false, userId));
		if (response.resultCode === 0) {
			dispatch(toggleFollowUser(userId, follow));
		}
	}
}
// -- //

export default usersReducer;