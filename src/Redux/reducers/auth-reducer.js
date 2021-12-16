import { authAPI } from "../../api/api";

// Action Types
const SET_USER_DATA = 'social-network/auth-reducer/SET_USER_DATA';
const SET_CAPTCHA = 'social-network/auth-reducer/SET_CAPTCHA';
// -- //

const initialState = {
	userData: null,
	isAuth: false,
	captcha: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				userData: action.payload,
				isAuth: action.isAuth
			}
		}

		case SET_CAPTCHA: {
			return {
				...state,
				captcha: action.captcha
			}
		}

		default:
			return state;
	}
};

// Actions Creators
export const setUserData = (payload, isAuth) => ({ type: SET_USER_DATA, payload, isAuth });
export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });
// -- //

// Thunk Creators
export const getCaptchaThunk = () => async (dispatch) => {
	const response = await authAPI.getCaptcha();
	dispatch(setCaptcha(response.url));
}

export const getUserDataThunk = () => async (dispatch) => {
	const response = await authAPI.getUserInfo();
	if (response.resultCode === 0) {
		dispatch(setUserData(response.data, true));
	} else {
		console.log(`Message: ${response.messages}; \nError code: ${response.resultCode}.`);
	}
	return response;
}

export const userLoginThunk = (data, setFormStatus) => async (dispatch) => {
	const response = await authAPI.login(data);
	if (response.resultCode === 0) {
		dispatch(getUserDataThunk());
		dispatch(setCaptcha(null));
	} else if (response.resultCode === 10) {
		dispatch(getCaptchaThunk());
	} else {
		if (response.messages[0] === 'Incorrect Email or Password') {
			setFormStatus("Вы ввели неверные данные!");
		} else {
			setFormStatus(response.messages);
			console.error(`${response}\nMessage: ${response.messages}; \nError code: ${response.resultCode}.`);
		}
	}
}

export const userLogoutThunk = () => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(setUserData(null, false));
		dispatch(setCaptcha(null));
	} else {
		console.error(`Message: ${response.messages}; \nError code: ${response.resultCode}.`);
	}
}
// -- //

export default authReducer;