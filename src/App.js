import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index';
import About from './components/about/index';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<About />
			</div>
		);
	}
}

export default App;
