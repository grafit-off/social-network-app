const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS'

const initialState = {
	usersData: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MORE_USERS: {
			let newMessage = {
				id: 6,
				name: 'Николай Чёрный',
				message: state.newMassageText,
				avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
			};
			return {
				...state,
				messagesData: [...state.messagesData, newMessage],
				newMassageText: ''
			};
		}

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
				usersData: [...state.usersData, ...action.users]
			}
		}

		default:
			return state;
	}
};
export const followUserAC = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const showMoreUsersActionCreater = () => ({ type: SHOW_MORE_USERS });

export default usersReducer;