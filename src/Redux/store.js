import profileReducer from './reducers/profile-reducer';
import messagesReducer from './reducers/messages-reducer';
import asideReducer from './reducers/aside-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_AREA_TEXT = 'UPDATE-POST-AREA-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_AREA_TEXT = 'UPDATE-MESSAGE-AREA-TEXT';

let store = {
	_callObserver() {
		console.log('No observers is subscribe!');
	},

	subscribe(observer) {
		this._callObserver = observer;
	},

	_state: {
		messagesPage: {
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
			newMassageText: ''
		},
		profilePage: {
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
		},
		aside: {
			favoriteFriends: [{
				id: 1,
				name: 'Вадим Макеев',
				avatar: 'https://i.pinimg.com/originals/df/c5/fa/dfc5faf10d97e9c45fb29f8ecff17716.jpg'
			}, {
				id: 2,
				name: 'Соня Март',
				avatar: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg'
			}, {
				id: 3,
				name: 'Дмитрий Борс',
				avatar: 'https://avatarfiles.alphacoders.com/715/71560.jpg'
			},
			]
		}
	},

	getState() {
		return this._state;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
		this._state.aside = asideReducer(this._state.aside, action);

		this._callObserver(this._state);
	}
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updatePostAreaActionCreater = (text) => ({ type: UPDATE_POST_AREA_TEXT, newText: text });

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updataMessageAreaTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_AREA_TEXT, newText: text });


export default store;