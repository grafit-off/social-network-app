import { profileAPI } from "../../api/api";

// Action Types
const ADD_POST = 'social-network/profile-reducer/ADD-POST';
const DELETE_POST = 'social-network/profile-reducer/DELETE-POST';
const SET_PROFILE = 'social-network/profile-reducer/SET-PROFILE';
const SET_STATUS = 'social-network/profile-reducer/SET-STATUS';
// -- //

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
		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter(el => el.id !== action.id)
			}
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

// Actions Creators
export const addPost = (postMessage) => ({ type: ADD_POST, postMessage });
export const deletePost = (id) => ({ type: DELETE_POST, id });

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
// -- //

// Thunks Creators
export const getProfileThunk = userId => async dispatch => {
	try {
		const response = await profileAPI.getProfile(userId);
		dispatch(setProfile(response));
	} catch (error) {
		dispatch(setProfile('404'));
	}
	const status = await profileAPI.getStatus(userId);
	dispatch(setStatus(status));
}

export const updateStatusThunk = status => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(setStatus(status));
	}
}
// -- //

export default profileReducer;