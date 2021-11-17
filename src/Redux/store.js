import { combineReducers, createStore } from 'redux';
import asideReducer from './reducers/aside-reducer';
import messagesReducer from './reducers/messages-reducer';
import profileReducer from './reducers/profile-reducer';

const reducers = combineReducers({
	aside: asideReducer,
	messagesPage: messagesReducer,
	profilePage: profileReducer
});

let store = createStore(reducers);
console.log(store);


export default store;