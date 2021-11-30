import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

import './assets/css/normalize.css';
import './assets/css/App.css';

import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer'

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app">
				<HeaderContainer />
				<Aside state={props.state.aside} />
				<main className="app__main main">
					<Routes>
						<Route
							path="/profile/*"
							element={<ProfileContainer />} />
						<Route
							path="/messages/*"
							element={<DialogsContainer />} />
						<Route
							path="/users/"
							element={<UsersContainer />} />
						<Route
							path="/news"
							element={<News />} />
						<Route
							path="/settings"
							element={<Settings />} />
						<Route
							path="/login"
							element={<LoginContainer />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
