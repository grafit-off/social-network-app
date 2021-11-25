import { applyMiddleware, combineReducers, createStore } from 'redux';
import asideReducer from './reducers/aside-reducer';
import messagesReducer from './reducers/messages-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	aside: asideReducer,
	messagesPage: messagesReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;