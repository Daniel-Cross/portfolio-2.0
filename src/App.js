import React, { Component } from 'react';
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
		};
	}

	render() {
		const { isDesktop } = this.state;
		return (
			<div className="App">
				<Header />
				{/* <About /> */}
				{/* <Experience /> */}
				<Projects isDesktop={isDesktop} />
				{/* <Education /> */}
				<Footer />
			</div>
		);
	}
}

export default App;
