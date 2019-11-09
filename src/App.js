import React, { Component } from 'react';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Header from './components/Header';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDesktop: window.innerWidth > 1200,
			isDarkMode: false,
		};
	}

	handleModeChange = () => {
		this.setState((state) => ({
			isDarkMode: !state.isDarkMode,
		}));
	};

	render() {
		const { isDesktop, isDarkMode } = this.state;

		const darkTheme = {
			background: 'rgba(26, 26, 26, 1)',
			color: '#fff',
		};

		const lightTheme = {
			background: '#fff',
			color: 'rgba(247, 140, 160, 1)',
		};

		return isDarkMode ? (
			<div className="App" style={darkTheme}>
				<Header handleModeChange={this.handleModeChange} isDarkMode={isDarkMode} />
				<Projects isDesktop={isDesktop} />
				<Footer />
			</div>
		) : (
			<div className="App" style={lightTheme}>
				<Header handleModeChange={this.handleModeChange} isDarkMode={isDarkMode} />
				<Projects isDesktop={isDesktop} />
				<Footer isDarkMode={isDarkMode} />
			</div>
		);
	}
}

export default App;
