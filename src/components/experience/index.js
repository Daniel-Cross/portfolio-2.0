import React from 'react';
import '../../styles/experience/index.css';

const Experience = () => {
	return (
		<div id="Experience">
			<h1 className="title">Experience</h1>
			<div className="work">
				<div className="jobs">
					<div className="section1">
						<h2 className="place">BookingGo</h2>
						<p className="location">Manchester, UK</p>
						<p className="time">January 2019 - March 2019</p>
					</div>
					<div className="section1">
						<h2 className="place">Manchester Codes Academy</h2>
						<p className="location">Manchester, UK</p>
						<p className="time">December 2018 - March 2019</p>
					</div>
					<div className="section1">
						<h2 className="place">Degree53</h2>
						<p className="location">Manchester, UK</p>
						<p className="time">November 2018 - January 2019</p>
					</div>
				</div>

				<div className="positions">
					<h3 className="position">Software Engineer</h3>
					<h3 className="position">Mentor</h3>
					<h3 className="position">Junior Front-End Developer</h3>
				</div>

				<div className="job-descriptions">
					<ul>
						<li>
							Part of the team contributing towards the Booking Experience. Re-platforming from Java &amp;
							jQuery to the new micro-service platform (React, Node)
						</li>
						<li>Technologies worked with include: JavaScript, React, Node, Jest, Nightwatch </li>
						<li>Agile work environment (SCRUM, Sprints, Kanban, Mobbing, Paired Programming)</li>
					</ul>
					<ul>
						<li>
							Assisted in the teaching and mentoring of learners of all ages on their journey to become
							full-time developers.
						</li>
						<li>
							Presented feedback and contributions to learners submitted code and assisted in the general
							running of the coding academy
						</li>
					</ul>
					<ul>
						<li>
							Contributed towards agency work of bespoke websites for clients as well as contributing
							towards the companies’ white label gambling software.
						</li>
						<li>Technologies worked with include: JavaScript, React, TypeScript and Jest </li>
						<li>Agile work environment (SCRUM, Kanban) and Test-Driven Development</li>
					</ul>
				</div>
				<div />
			</div>
		</div>
	);
};

export default Experience;
