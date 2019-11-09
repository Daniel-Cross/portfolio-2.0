import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Projects = (props) => {
	const jest = {
		height: '50px',
		width: '50px',
	};

	return (
		<div id="Projects">
			<h1 className="title">Projects</h1>
			<div className="container">
				<div className="project">
					<h2 className="project-title">King Kev Quote Generator</h2>
					{props.isDesktop ? (
						<div>
							<img
								className="desktop"
								src={require('../assets/img/kingKevDesktop.png')}
								alt="king kev quote generator desktop"
							/>

							<img
								className="mobile"
								src={require('../assets/img/kingKevMobile.png')}
								alt="king kev quote generator mobile"
							/>
						</div>
					) : null}
					<hr />
					<div className="description">
						<div className="synopsis">
							<div className="made-with">
								<img className="technology" src={require('../assets/img/react.png')} alt="react logo" />
							</div>
							<p>
								The King Kev Quote Generator idea was manifested one day while searching for a certain
								quote from everybody's favourite 1970's footballer, Kevin Keegan. King Kev has a habit
								of saying some things that don't make sense to anyone but himself, he also happens to be
								incredibly unlucky, often when he's minding his own business or when he tries to do
								something good for someone else. Upon unsuccessfully finding a collated collection of
								Keggy's antics, the King Kev Quote Generator was born! It returns 50+ quotes/incidents
								from the great man himself at random. The website got National coverage in the UK when a
								footballing podcast gave the website a mention on a show!
							</p>
							<div className="links">
								<a href="https://github.com/Daniel-Cross/keegan" target="_blank">
									<i className="fab fa-github fa-3x" />
								</a>
								<a href="https://superkevinkeegan.com/" target="_blank">
									<i className="far fa-window-maximize fa-3x" />
								</a>
							</div>
						</div>
						{props.isDesktop ? (
							<div className="tweet">
								<TwitterTweetEmbed tweetId={'1107951232688242688'} />
							</div>
						) : null};
					</div>
					<hr />
				</div>
				<div className="project">
					<h2 className="project-title">BookingGo Technical Test</h2>
					{props.isDesktop ? (
						<img
							className="desktop-only"
							src={require('../assets/img/bookingGoDesktop.png')}
							alt="booking go technical test"
						/>
					) : null}
					<hr />
					<div className="synopsis">
						<div className="made-with">
							<img className="technology" src={require('../assets/img/react.png')} alt="react logo" />
							<img
								className="technology"
								src={require('../assets/img/jest.jpg')}
								alt="jest logo"
								style={jest}
							/>
						</div>
						<p className="detail">
							This is the completed technical test received from BookingGo (RentalCars) which helped gain
							successful employment with the company. The task was to implement a user story as close to
							the original example as possible. The solution had to work in all modern browsers (IE10+) in
							desktop only, however, consideration was made for a mobile first approach.
							<br />
							<br />
							The search function had to return a city from the BookingGo api with matching characters
							once three or more letters were entered into the search input. Thorough testing and test
							driven development were also used but not mandatory.
						</p>

						<div className="links">
							<a href="https://github.com/Daniel-Cross/rental-cars" target="_blank">
								<i className="fab fa-github fa-3x" />
							</a>
							<a href="https://rental-cars.herokuapp.com/" target="_blank">
								<i className="far fa-window-maximize fa-3x" />
							</a>
						</div>
					</div>
					<hr />
				</div>
				<div className="project">
					<h2 className="project-title">Vice App</h2>
					{props.isDesktop ? (
						<img className="mobile-only" src={require('../assets/img/vice.png')} alt="vice app" />
					) : null}
					<hr />
					<div className="synopsis">
						<div className="made-with">
							<img className="technology" src={require('../assets/img/react.png')} alt="react logo" />
						</div>
						<p className="detail">
							Dark humour mobile first React.js app. Enter your Vice and the app will give you advice and
							work out how much money you spend on your chosen vice. The app will also tell you how long
							you would have to give up your vice in order to save some cash to purchase an item.
							<br />
							<br />
							App was designed and completed as part of a group final project while attending Manchester
							Codes Academy.
						</p>

						<div className="links">
							<a href="https://github.com/Daniel-Cross/vice-app/blob/master/README.md" target="_blank">
								<i className="fab fa-github fa-3x" />
							</a>
						</div>
					</div>
					<hr />
				</div>
				<div className="project">
					<h2 className="project-title">5-3-1 Routine</h2>
					{props.isDesktop ? (
						<img className="desktop-only" src={require('../assets/img/531.png')} alt="5-3-1 workout app" />
					) : null}
					<hr />
					<div className="synopsis">
						<div className="made-with">
							<img className="technology" src={require('../assets/img/react.png')} alt="react logo" />
							<img className="technology" src={require('../assets/img/node.png')} alt="react logo" />
						</div>
						<p className="detail">
							A workout tracking app that specialises in helping track your 5-3-1 routines and
							development.
							<br />
							<br />
							The back-end of the application is built in Node.js, express.js, mongoDB and Mongoose, it
							contains user details linked to a users personal account, including a login with
							authentication.
							<br />
							<br />
							The front-end of the application is built using React.js.
						</p>

						<div className="links">
							<a href="https://github.com/Daniel-Cross/5-3-1-workout-tracker" target="_blank">
								<i className="fab fa-github fa-3x" />
							</a>
						</div>
						<hr />
					</div>
				</div>
				<div className="project">
					<h2 className="project-title">Virtual Pet</h2>
					{props.isDesktop ? (
						<img
							className="desktop-only"
							src={require('../assets/img/oop1.png')}
							alt="Pocket Monster OOP"
						/>
					) : null}
					<hr />
					<div className="synopsis">
						<div className="made-with">
							<img
								className="technology"
								src={require('../assets/img/JavaScript.png')}
								alt="react logo"
								style={jest}
							/>
						</div>
						<p className="detail">
							Real pets are great, but they do have drawbacks. They smell. Your mum might be allergic to
							them. Maybe you just aren't allowed one in your flat.
							<br />
							<br />
							To solve these problems, I built my own JavaScript pet instead. JavaScript pets are great.
							Because they're made of JavaScript, they can do literally anything, and they don't have any
							of the drawbacks of regular pets.
							<br />
							<br />
							This pet has all the following features: <br />
							They can get older <br />
							As they get older, they get hungrier and less fit <br />
							You can walk your pet to increase it's fitness. 🏃<br />
							You can feed your pet to decrease it's hunger. 🍕 <br /> You can talk to your pet to see if
							it needs feeding or walking <br /> If your pet gets too hungry or unfit, it will DIE 💀{' '}
							<br /> If your pet gets to 30 days old it will DIE 😢
						</p>

						<div className="links">
							<a href="https://github.com/Daniel-Cross/oop" target="_blank">
								<i className="fab fa-github fa-3x" />
							</a>
						</div>
						<hr />
					</div>
				</div>
				<div className="project">
					<h2 className="project-title">NASA Search</h2>
					{props.isDesktop ? (
						<img className="desktop-only" src={require('../assets/img/nasa.png')} alt="NASA search" />
					) : null}
					<hr />
					<div className="synopsis">
						<div className="made-with">
							<img className="technology" src={require('../assets/img/react.png')} alt="react logo" />
						</div>
						<p className="detail">
							A search engine that returns space related images from NASA's api. Search for you favourite
							planet or star and see what pictures NASA have taken as part of their research!
							<br />
							<br />
							This application was built using React.js and tested using Jest.
						</p>

						<div className="links">
							<a href="https://github.com/Daniel-Cross/nasa-search-engine" target="_blank">
								<i className="fab fa-github fa-3x" />
							</a>
							<a href="https://nasa-search-image.herokuapp.com/" target="_blank">
								<i className="far fa-window-maximize fa-3x" />
							</a>
						</div>
						<hr />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
