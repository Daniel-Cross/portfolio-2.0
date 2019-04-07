import React from 'react';
import '../../styles/footer/index.css';

const Footer = (props) => {
	const { name, email, message, handleChange, handleSubmit } = props;
	return (
		<div id="Footer">
			<hr />
			<h1 className="title">Contact</h1>
			<div className="email-form">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
					<input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
					<textarea
						rows="5"
						cols="50"
						placeholder="Message..."
						name="message"
						value={message}
						onChange={handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
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
				<a href="https://www.messenger.com/t/crossy1686" target="_blank">
					<i className="fab fa-facebook-messenger fa-3x" />
				</a>

				<a href="https://twitter.com/DanCrossy" target="_blank">
					<i className="fab fa-twitter fa-3x" />
				</a>
			</div>
			<h4>Daniel Cross &copy; 2019</h4>
		</div>
	);
};

export default Footer;
