import React from 'react';
import '../../styles/about/index.css';

const About = () => {
	return (
		<div className="About">
			<div className="container">
				<img
					className="avatar"
					src={require('/Users/danielcross/Projects/portfolio-version2/src/assets/img/avatar.jpg')}
					alt="avatar.jpg"
				/>
				<h3>Current Title</h3>
				<p>weifgfihewfhgfkjhg</p>
			</div>
		</div>
	);
};

export default About;
