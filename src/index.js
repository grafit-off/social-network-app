import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';

import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} store={store} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntireTree(store.getState());
store.subscribe(() => rerenderEntireTree(store.getState()));

reportWebVitals();


