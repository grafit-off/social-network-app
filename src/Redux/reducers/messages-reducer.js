const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_AREA_TEXT = 'UPDATE-MESSAGE-AREA-TEXT';

const messagesReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 6,
				name: 'Николай Чёрный',
				message: state.newMassageText,
				avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
			};

			state.messagesData.push(newMessage);
			state.newMassageText = '';
			return state;

		case UPDATE_MESSAGE_AREA_TEXT:
			state.newMassageText = action.newText;
			return state;

		default:
			return state;
	}
};


export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updataMessageAreaTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_AREA_TEXT, newText: text });



export default messagesReducer;