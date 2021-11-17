const initialState = {
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
};

const asideReducer = (state = initialState, action) => {
	switch (action.type) {
		/* case value:
			
			return state; */

		default:
			return state;
	}
}

export default asideReducer;