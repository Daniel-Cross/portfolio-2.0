import React from 'react';
import '../../styles/experience/index.css';

const Experience = () => {
	return (
		<div id="Experience">
			<h1 className="title">Experience</h1>
			<div className="jobs">
				<div className="job-role">
					<h2 className="place">BookingGo</h2>
					<p className="location">Manchester, UK</p>
					<p className="time">January 2019 - March 2019</p>
					<h3 className="position">Software Engineer</h3>
					<p className="job-description">
						Part of the team contributing towards the Booking Experience (Rental Cars). Moving over from old
						platform (Java, jQuery) to the new micro-service platform (React, Node), Technologies worked
						with include: JavaScript, React, Node, Jest, Agile work environment (SCRUM, Sprints, Kanban)
					</p>
				</div>
				<div className="job-role">
					<h2 className="place">Manchester Codes</h2>
					<p className="location">Manchester, UK</p>
					<p className="time">December 2018 - March 2019</p>
					<h3 className="position">Mentor</h3>
					<p className="job-description">
						Assisted in the teaching and mentoring of learners of all ages on their journey to become
						full-time developers, Offered feedback and contributions to learners submitted code, Assisted in
						the general running of the coding academy
					</p>
				</div>
				<div className="job-role">
					<h2 className="place">Degree53</h2>
					<p className="location">Manchester, UK</p>
					<p className="time">November 2018 - January 2019</p>
					<h3 className="position">Junior Front-End Developer</h3>
					<p className="job-description">
						Some agency work as well as contributing towards the companies’ IP • Technologies worked with
						include: JavaScript, React and TypeScript, Jest • Agile work environment (SCRUM, Kanban) and
						Test-Driven Development
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
