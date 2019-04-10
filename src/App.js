import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Projects from './components/projects';
import Header from './components/header/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDesktop: window.innerWidth > 1200,
			name: '',
			email: '',
			message: '',
			sent: false,
			messageText: '',
			alertMessage: '',
			isSuccess: false,
			isError: false,
			isDarkMode: false,
		};
	}

	handleModeChange = () => {
		this.setState((state) => ({
			isDarkMode: !state.isDarkMode,
		}));
	};

	// handleResetForm = () => {
	// 	this.setState({
	// 		name: '',
	// 		message: '',
	// 		email: '',
	// 		messageText: 'Your message has been sent!',
	// 	});
	// };

	// handleChange = (e) => {
	// 	const { name, value } = e.target;

	// 	this.setState({ [name]: value });
	// };

	// handleSubmit(e) {
	// 	e.preventDefault();
	// }

	// resetForm() {
	// 	document.getElementById('contact-form').reset();
	// }

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

				{/* <Form
				{this.state.isSuccess || this.state.isError ? (
						<Alert alertMessage={alertMessage} isSuccess={isSuccess} isError={isError} />
					) : null}					name={name}
					subject={email}
					message={message}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/> */}

				<Footer />
			</div>
		) : (
			<div className="App" style={lightTheme}>
				<Header handleModeChange={this.handleModeChange} isDarkMode={isDarkMode} />
				<Projects isDesktop={isDesktop} />
				{/* <Form

				{this.state.isSuccess || this.state.isError ? (
						<Alert alertMessage={alertMessage} isSuccess={isSuccess} isError={isError} />
					) : null}					name={name}
					subject={email}
					message={message}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/> */}
				<Footer isDarkMode={isDarkMode} />
			</div>
		);
	}
}

export default App;
