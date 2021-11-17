import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';
import { Provider } from './StoreContext';

import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<Provider store={store}>
			<React.StrictMode>
				<App state={state} />
			</React.StrictMode>
		</Provider>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());
store.subscribe(() => rerenderEntireTree(store.getState()));

reportWebVitals();


