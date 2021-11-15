import state from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './Redux/state';
import { updatePostText } from './Redux/state';
import { addMessage } from './Redux/state';
import { updateMessageText } from './Redux/state';


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

reportWebVitals();


