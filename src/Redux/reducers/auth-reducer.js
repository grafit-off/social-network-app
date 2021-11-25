import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
	userData: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				userData: action.data,
				isAuth: true
			}
		}

		default:
			return state;
	}
};


export const setUserData = (data) => ({ type: SET_USER_DATA, data })

export const getUserDataThunk = () => (dispatch) => {
	authAPI.getUserInfo()
		.then((response) => {
			if (response.resultCode === 0) {
				dispatch(setUserData(response.data));
			} else {
				console.error('Error: You are not authorized!')
			}
		})
}

export default authReducer;