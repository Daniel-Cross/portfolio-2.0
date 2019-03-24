import React from 'react';
import '../../styles/about/index.css';

const About = () => {
	return (
		<div id="About">
			<h1 className="title">About</h1>
			<div className="personal">
				<p>
					I'm a Front-End JavaScript Developer with detail-oriented nature. Studied best practices and agile
					methodologies at Manchester Codes Academy where technologies taught include JavaScript, Node, React,
					Express and MongoDB. Previously worked at BookingGo and Degree53 as a full-time developer
					specialising in frontend JavaScript and React development. Equipped with a strong understanding of
					JavaScript fundamentals and React concepts with a general understanding across the full-stack.
					Previously worked as a Vice Principal at an International school based in Stockholm, Sweden.
				</p>
			</div>
			<h1 className="title">Skills</h1>
			<div className="skills">
				<div className="skill">
					<h2>Development</h2>
					<p>JavaScript, React, Node.js, Express.js, MongoDB, Sass/Scss, HTML5, CSS3.</p>
				</div>
				<div className="skill">
					<h2>Communication</h2>
					<p>Excellent listener, confident and professional communicator.</p>
				</div>
				<div className="skill">
					<h2>Leadership</h2>
					<p>Proven track record of success in project and team management.</p>
				</div>
				<div className="skill">
					<h2>Adaptability</h2>
					<p>Flexible, unflappable and able to adapt to a situation quickly.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
