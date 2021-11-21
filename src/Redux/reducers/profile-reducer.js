const ADD_POST = 'ADD-POST';
const UPDATE_POST_AREA_TEXT = 'UPDATE-POST-AREA-TEXT';

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

		default:
			return state;
	}
};


export const addPost = () => ({ type: ADD_POST });
export const updatePostArea = (text) => ({ type: UPDATE_POST_AREA_TEXT, newText: text });


export default profileReducer;