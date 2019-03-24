import React from 'react';
import '../../styles/footer/index.css';

const Footer = () => {
	return (
		<div id="Footer">
			<div className="social">
				<a href="https://github.com/Daniel-Cross" target="_blank">
					<i className="fab fa-github fa-3x" />
				</a>
				<a href="https://www.linkedin.com/in/daniel-cross/" target="_blank">
					<i className="fab fa-linkedin-in fa-3x" />
				</a>
				<img
					className="avatar"
					src={require('/Users/danielcross/Projects/portfolio-version2/src/assets/img/avatar.jpg')}
					alt="avatar.jpg"
				/>
				<i className="fab fa-facebook-messenger fa-3x" />
				<a href="https://twitter.com/DanCrossy" target="_blank">
					<i className="fab fa-twitter fa-3x" />
				</a>
			</div>
			<div className="contact">
				<a href="mailto:dan.s.cross@icloud.com">
					<h4>dan.s.cross@icloud.com</h4>
				</a>

				<h4>+46 730 44 38 33</h4>
			</div>
			<h4>Daniel Cross &copy; 2019</h4>
		</div>
	);
};

export default Footer;
