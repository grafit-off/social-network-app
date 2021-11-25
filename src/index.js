import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
	<Provider store={store}>
		<App state={store.getState()} />
	</Provider>,
	document.getElementById('root')
);

// rerenderEntireTree(store.getState());
// store.subscribe(() => rerenderEntireTree(store.getState()));

reportWebVitals();


