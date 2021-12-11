import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();


