import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store';

import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}

				addPost={store.addPost.bind(store)}
				updatePostText={store.updatePostText.bind(store)}

				addMessage={store.addMessage.bind(store)}
				updateMessageText={store.updateMessageText.bind(store)} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();


