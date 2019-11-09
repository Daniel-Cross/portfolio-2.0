import React from 'react';

const Header = (props) => {
	const { handleModeChange, isDarkMode } = props;

	return isDarkMode ? (
		<div
			id="Header"
			style={{
				background: `rgba(26, 26, 26, 1)`,
			}}>
			<div className="navbar">
				<ul>
					<li>
						<a href="#Projects">Projects</a>
					</li>
					<li>
						<a href="#Footer">Social</a>
					</li>
					<li id="darkMode">
						{isDarkMode ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
						<label className="switch">
							<input type="checkbox" onChange={handleModeChange} defaultChecked={isDarkMode} />
							<span className="slider round" />
						</label>
					</li>
				</ul>
			</div>
			<div className="hero">
				<h1>DANIEL CROSS</h1>
				<hr />
				<h3>SOFTWARE ENGINEER</h3>
			</div>
		</div>
	) : (
		<div id="Header">
			<div className="navbar">
				<ul>
					<li>
						<a href="#Projects">Projects</a>
					</li>
					<li>
						<a href="#Footer">Social</a>
					</li>
					<li id="darkMode">
						{isDarkMode ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
						<label className="switch">
							<input type="checkbox" onChange={handleModeChange} defaultChecked={isDarkMode} />
							<span className="slider round" />
						</label>
					</li>
				</ul>
			</div>
			<div className="hero">
				<h1>DANIEL CROSS</h1>
				<hr />
				<h3>SOFTWARE ENGINEER</h3>
			</div>
		</div>
	);
};

export default Header;
