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
		case ADD_POST:
			let newPost = {
				id: 4,
				text: state.newPostText,
				likes: 0
			};

			state.postsData.push(newPost);
			state.newPostText = '';
			return state;

		case UPDATE_POST_AREA_TEXT:
			state.newPostText = action.newText;
			return state;

		default:
			return state;
	}
};


export const addPostActionCreater = () => ({ type: ADD_POST });
export const updatePostAreaActionCreater = (text) => ({ type: UPDATE_POST_AREA_TEXT, newText: text });


export default profileReducer;