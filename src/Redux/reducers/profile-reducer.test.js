import profileReducer, { addPost, deletePost } from "./profile-reducer";

// 1. Test data
let state = {
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
	}]
}

test('postData length should increment', () => {
	let action = addPost('Hello Test');

	// 2. Test action
	let newState = profileReducer(state, action);
	// 3. Test expactation
	expect(newState.postsData.length).toBe(4);
});

test('postData text should be correct', () => {
	let action = addPost('Hello Test');

	// 2. Test action
	let newState = profileReducer(state, action);
	// 3. Test expactation
	expect(newState.postsData[3].text).toBe('Hello Test');
});

test('postData likes should be correct', () => {
	let action = addPost('Hello Test');

	// 2. Test action
	let newState = profileReducer(state, action);
	// 3. Test expactation
	expect(newState.postsData[3].likes).toBe(0);
});

test('postData id should be correct', () => {
	let action = addPost('Hello Test');

	// 2. Test action
	let newState = profileReducer(state, action);
	// 3. Test expactation
	expect(newState.postsData[3].id).toBe(4);
});

test('postData length after deleting should decrement', () => {
	let action = deletePost(3);
	// 2. Test action
	let newState = profileReducer(state, action);
	// 3. Test expactation
	expect(newState.postsData.length).toBe(2);
});

test('postData length after deleting should not decrement if id is incorect', () => {
	let action = deletePost(1212);
	// 2. Test action
	let newState = profileReducer(state, action);
	// 3. Test expactation
	expect(newState.postsData.length).toBe(3);
});
