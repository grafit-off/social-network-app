import react from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './App.js';

test('Render without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AppProvider />, div);
	ReactDOM.unmountComponentAtNode(div);
})