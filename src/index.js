import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, { addPost, updatePostText, addMessage, updateMessageText, subscribe } from './Redux/state';

import reportWebVitals from './reportWebVitals';


let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
				addPost={addPost}
				updatePostText={updatePostText}
				addMessage={addMessage}
				updateMessageText={updateMessageText} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree)
reportWebVitals();


