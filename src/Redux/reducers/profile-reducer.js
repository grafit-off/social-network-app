const ADD_POST = 'ADD-POST';
const UPDATE_POST_AREA_TEXT = 'UPDATE-POST-AREA-TEXT';
const SET_PROFILE = 'SET-PROFILE';

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
	newPostText: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				text: state.newPostText,
				likes: 0
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: ''
			};
		}

		case UPDATE_POST_AREA_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}

		case SET_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}

		default:
			return state;
	}
};


export const addPost = () => ({ type: ADD_POST });
export const updatePostArea = (text) => ({ type: UPDATE_POST_AREA_TEXT, newText: text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export default profileReducer;