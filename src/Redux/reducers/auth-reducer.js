import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

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


export const setUserData = (payload, isAuth) => ({ type: SET_USER_DATA, payload, isAuth });
export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });

export const getCaptchaThunk = () => (dispatch) => {
	authAPI.getCaptcha()
		.then((response) => {
			dispatch(setCaptcha(response.url));
		})
}

export const getUserDataThunk = () => (dispatch) => {
	return authAPI.getUserInfo()
		.then((response) => {
			if (response.resultCode === 0) {
				dispatch(setUserData(response.data, true));
			} else {
				console.log(`Message: ${response.messages}; \nError code: ${response.resultCode}.`);
			}
		})
}

export const userLoginThunk = (data, setFormStatus) => (dispatch) => {
	authAPI.login(data)
		.then((response) => {
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
				}
				console.warn(`Message: ${response.messages}; \nError code: ${response.resultCode}.`);
			}
		})
}


export const userLogoutThunk = () => (dispatch) => {
	authAPI.logout()
		.then((response) => {
			if (response.resultCode === 0) {
				dispatch(setUserData(null, false));
				dispatch(setCaptcha(null));
			} else {
				console.error(`Message: ${response.messages}; \nError code: ${response.resultCode}.`);
			}
		})
}

export default authReducer;