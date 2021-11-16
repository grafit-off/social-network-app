let store = {
	_subscriber() {
		console.log('No observers is subscribe!');
	},

	subscribe(observer) {
		this._subscriber = observer;
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
		return this.state;
	},

	addPost() {
		let newPost = {
			id: 4,
			text: this._state.profilePage.newPostText,
			likes: 0
		};

		this.state.profilePage.postsData.push(newPost);
		this.state.profilePage.newPostText = '';
		this._subscriber();
	},

	updatePostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._subscriber();
	},

	addMessage() {
		let newMessage = {
			id: 6,
			name: 'Николай Чёрный',
			message: this._state.messagesPage.newMassageText,
			avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
		};
		this._state.messagesPage.messagesData.push(newMessage);
		this._state.messagesPage.newMassageText = '';
		this._subscriber();
	},

	updateMessageText(newText) {
		this._state.messagesPage.newMassageText = newText;
		this._subscriber();
	}
};

export default store;


/*
let rerenderEntireTree = () => { };

let state = {
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
}

export const addPost = () => {
	let newPost = {
		id: 4,
		text: state.profilePage.newPostText,
		likes: 0
	};

	state.profilePage.postsData.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updatePostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const addMessage = () => {
	let newMessage = {
		id: 6,
		name: 'Николай Чёрный',
		message: state.messagesPage.newMassageText,
		avatar: 'https://i.pinimg.com/736x/50/8d/4c/508d4cd0e2a9daeb96b3ee92dcf665b7.jpg'
	};

	state.messagesPage.messagesData.push(newMessage);
	state.messagesPage.newMassageText = '';
	rerenderEntireTree(state);
}

export const updateMessageText = (newText) => {
	state.messagesPage.newMassageText = newText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};
 */