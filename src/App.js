import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/index';
import Footer from './components/footer';
import Projects from './components/projects';
// import About from './components/about/index';
// import Experience from './components/experience';
// import Education from './components/education';

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
		};
	}

	handleResetForm = () => {
		this.setState({
			name: '',
			message: '',
			email: '',
			messageText: 'Your message has been sent!',
		});
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleSubmit(e) {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;
		axios({
			method: 'POST',
			url: 'http://localhost:3002/send',
			data: {
				name,
				email,
				message,
			},
		}).then((response) => {
			if (response.data.msg === 'success') {
				alert('Message Sent.');
				this.resetForm();
			} else if (response.data.msg === 'fail') {
				alert('Message failed to send.');
			}
		});
	}

	resetForm() {
		document.getElementById('contact-form').reset();
	}

	render() {
		const { isDesktop, name, email, message } = this.state;
		return (
			<div className="App">
				<Header />
				{/* <About /> */}
				{/* <Experience /> */}
				<Projects isDesktop={isDesktop} />
				{/* <Education /> */}
				<Footer
					name={name}
					subject={email}
					message={message}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default App;
