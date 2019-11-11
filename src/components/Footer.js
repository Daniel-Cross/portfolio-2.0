import React from 'react';

const Footer = (props) => {
	return (
		<div id="Footer">
			<div className="social">
				{/* eslint-disable-next-line */}
				<a href="https://github.com/Daniel-Cross" target="_blank">
					<i className="fab fa-github fa-3x" />
				</a>
				{/* eslint-disable-next-line */}
				<a href="https://www.linkedin.com/in/daniel-cross/" target="_blank">
					<i className="fab fa-linkedin-in fa-3x" />
				</a>
				<img
					className="avatar"
					src={require('/Users/danielcross/Projects/portfolio-version2/src/assets/img/avatar.jpg')}
					alt="avatar.jpg"
				/>
				{/* eslint-disable-next-line */}
				<a href="https://www.messenger.com/t/crossy1686" target="_blank">
					<i className="fab fa-facebook-messenger fa-3x" />
				</a>
				{/* eslint-disable-next-line */}
				<a href="https://twitter.com/DanCrossy" target="_blank">
					<i className="fab fa-twitter fa-3x" />
				</a>
			</div>
			<h4>Daniel Cross &copy; 2019</h4>
		</div>
	);
};

export default Footer;
