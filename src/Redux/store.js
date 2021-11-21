import { combineReducers, createStore } from 'redux';
import asideReducer from './reducers/aside-reducer';
import messagesReducer from './reducers/messages-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';

const reducers = combineReducers({
	aside: asideReducer,
	messagesPage: messagesReducer,
	profilePage: profileReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;


export default store;