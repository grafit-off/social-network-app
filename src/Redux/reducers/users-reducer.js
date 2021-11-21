
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FETCHING = 'SET-FETCHING';

const initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
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

export default usersReducer;