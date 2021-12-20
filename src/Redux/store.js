import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import asideReducer from './reducers/aside-reducer';
import messagesReducer from './reducers/messages-reducer';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import appReducer from './reducers/app-reducer';

const reducers = combineReducers({
	aside: asideReducer,
	messagesPage: messagesReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunkMiddleware)
));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;