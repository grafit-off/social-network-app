// Action Types
const ADD_MESSAGE = 'social-network/messages-reducer/ADD-MESSAGE';
const DELETE_MESSAGE = 'social-network/messages-reducer/DELETE-MESSAGE';
// -- //

const initialState = {
	dialogsData: [{
		id: 1,
		name: 'Вадим Макеев',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 2,
		name: 'Дмитрий Борс',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 3,
		name: 'София Весна',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 4,
		name: 'Рита Март',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}],
	messagesData: [{
		id: 1,
		name: 'Вадим Макеев',
		message: 'Привет, ты как?',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 2,
		name: 'Вадим Макеев',
		message: 'Еще учишь реакт?',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 3,
		name: 'Николай Чёрный',
		message: 'Привет! Да, учу. За 3 дня прошел уже 30 уроков и 11 часов практики) А ты чем занимаешься?',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 4,
		name: 'Вадим Макеев',
		message: 'Да как обычно) Вэб-подкасты, блоги, работа)',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}, {
		id: 5,
		name: 'Николай Чёрный',
		message: 'Круто! Жду новых видео)',
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	}],
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: 6,
				name: 'Николай Чёрный',
				message: action.message,
				avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
			};
			return {
				...state,
				messagesData: [...state.messagesData, newMessage],
			};
		}
		case DELETE_MESSAGE: {
			return {
				...state,
				messagesData: state.messagesData.filter(el => el.id !== action.id)
			}
		}

		default:
			return state;
	}
};

// Actions Creators
export const addMessage = (message) => ({ type: ADD_MESSAGE, message });
export const deleteMessage = (id) => ({ type: DELETE_MESSAGE, id });
// -- //

export default messagesReducer;