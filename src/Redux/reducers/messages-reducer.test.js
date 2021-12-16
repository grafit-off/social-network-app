import messagesReducer, { addMessage, deleteMessage } from "./messages-reducer";

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

test('Message length should increment', () => {
	let action = addMessage('Test');

	let newState = messagesReducer(initialState, action);

	expect(newState.messagesData.length).toBe(6);
})

test('Message text should be correct', () => {
	let action = addMessage('Test');

	let newState = messagesReducer(initialState, action);

	expect(newState.messagesData[5].message).toBe('Test');
})


test('Message length should decrement', () => {
	let action = deleteMessage(5);

	let newState = messagesReducer(initialState, action);

	expect(newState.messagesData.length).toBe(4);
})