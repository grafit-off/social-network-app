import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';

import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={store.getState()} store={store} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();


