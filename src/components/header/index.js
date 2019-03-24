import React from 'react';
import '../../styles/header/index.css';

const Header = () => {
	return (
		<div id="Header">
			<div className="navbar">
				<ul>
					<li>
						<a href="#About">About</a>
					</li>
					<li>
						<a href="#Experience">Experience</a>
					</li>
					<li>
						<a href="#Projects">Projects</a>
					</li>
					<li>
						<a href="#Education">Education</a>
					</li>
					<li>
						<a href="#Footer">Contact</a>
					</li>
				</ul>
			</div>
			<div className="hero">
				<h1>DANIEL CROSS</h1>
				<hr />
				<h3>WEB DEVELOPER</h3>
			</div>
		</div>
	);
};

export default Header;
