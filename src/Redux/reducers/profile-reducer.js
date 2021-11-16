const ADD_POST = 'ADD-POST';
const UPDATE_POST_AREA_TEXT = 'UPDATE-POST-AREA-TEXT';

const profileReducer = (state, action) => {
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

export default profileReducer;