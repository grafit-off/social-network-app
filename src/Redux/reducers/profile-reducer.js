import { profileAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
	postsData: [{
		id: 1,
		text: '1 saasd sad',
		likes: 1
	}, {
		id: 2,
		text: '2 saasd sad',
		likes: 10
	}, {
		id: 3,
		text: '3 saasd sad',
		likes: 57
	}],
	profile: null,
	status: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				text: action.postMessage,
				likes: 0
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
			};
		}

		case SET_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}

		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}

		default:
			return state;
	}
};

export const addPost = (postMessage) => ({ type: ADD_POST, postMessage });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfileThunk = userId => dispatch => {
	profileAPI.getProfile(userId)
		.then((response) => {
			dispatch(setProfile(response));
		}, (reject) => {
			dispatch(setProfile('404'));
		});
	profileAPI.getStatus(userId)
		.then(response => dispatch(setStatus(response)));
}

export const updateStatusThunk = status => dispatch => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
}

export default profileReducer;