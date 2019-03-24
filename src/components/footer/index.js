import React from 'react';
import '../../styles/footer/index.css';

const Footer = () => {
	return (
		<div id="Footer">
			<div className="social">
				<img
					className="avatar"
					src={require('/Users/danielcross/Projects/portfolio-version2/src/assets/img/avatar.jpg')}
					alt="avatar.jpg"
				/>
				<i className="fab fa-github fa-5x" />
				<i className="fab fa-linkedin-in fa-5x" />
				<i className="fab fa-facebook-messenger fa-5x" />
				<i className="fab fa-twitter fa-5x" />
			</div>
			<h4>Daniel Cross &copy; 2019</h4>
		</div>
	);
};

export default Footer;
