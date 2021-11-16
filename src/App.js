import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

import './css/normalize.css';
import './css/App.css';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<Aside state={props.state.aside} />
				<main className="app__main main">
					<Routes>
						<Route
							path="/profile"
							element={<Profile state={props.state.profilePage} store={props.store} />} />
						<Route
							path="/messages/*"
							element={<Dialogs state={props.state.messagesPage} store={props.store} />} />
						<Route
							path="/news"
							element={<News />} />
						<Route
							path="/settings"
							element={<Settings />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
