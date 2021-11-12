import React from 'react';
import './css/normalize.css';
import './css/App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="app">
			<Header />
			<Aside />
			<main className="app__main main">
				<Profile />
			</main>
			<Footer />
		</div>
	);
}

export default App;
