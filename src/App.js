import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

// Thunk
import { initializeThunk } from './Redux/reducers/app-reducer'

// Styles
import './assets/css/normalize.css';
import './assets/css/App.css';

// Components
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeThunk();
	}

	render() {
		if (!this.props.isInitialized) {
			return <Preloader />
		}
		return (
			<BrowserRouter>
				<div className="app">
					<HeaderContainer />
					<Aside state={this.props.aside} />
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
}
const mstp = (state) => {
	return {
		aside: state.aside,
		isInitialized: state.app.isInitialized
	}
}

export default connect(mstp, { initializeThunk })(App);
