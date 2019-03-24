import React from 'react';
import '../../styles/education/index.css';

const Education = () => {
	return (
		<div id="Education">
			<h1 className="title">Education</h1>
			<div className="container">
				<div className="course">
					<h2 className="school">Manchester Codes</h2>
					<p>May 2018 - November 2018</p>
					<p>
						Test-Driven Development and Object-Oriented Programming with focus on JavaScript. Technologies
						learned: JavaScript, React, HTML5, CSS3, Sass/Scss, Node.js, MongoDB.
					</p>
				</div>
				<div className="course">
					<h2 className="school">University of Bolton</h2>
					<p>August 2011 - July 2012</p>
					<p>Post Graduate Certificate in Education (Teacher training)</p>
				</div>
				<div className="course">
					<h2 className="school">University of Salford</h2>
					<p>August 2006 - July 2009</p>
					<p>Popular Music and Recording</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
