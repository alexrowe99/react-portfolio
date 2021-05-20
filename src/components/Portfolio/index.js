import './style.css';
import Project from '../Project';
import Jgif from '../assets/img/portfolio/joke-gif.png';
import Jsquiz from '../assets/img/portfolio/js-quiz.png';
import Reschedule from '../assets/img/portfolio/reschedule.png';
import Weatherdb from '../assets/img/portfolio/weather.png';
import Teamprofile from '../assets/img/portfolio/profile-generator.png';
import Empdirectory from '../assets/img/portfolio/directory.png';

function Portfolio() {
	const projects = [
		{
			key: 0,
			type: 'group',
			name: 'Joke-GIF',
			description:
				'An application that displays a joke and a GIF based on user input through the use of third-party APIs',
			img: Jgif,
			deployedAt: 'https://topgek99.github.io/joke-gif/',
			repo: 'https://github.com/TopGek99/joke-gif',
		},
		{
			key: 1,
			type: 'solo',
			name: 'The Javascript Quiz',
			description:
				"A quick quiz to test the user's knowledge of basic JavaScript, while also displaying it's basic capabilities",
			img: Jsquiz,
			deployedAt: 'https://topgek99.github.io/the-javascript-quiz/',
			repo: 'https://github.com/TopGek99/the-javascript-quiz',
		},
		{
			key: 2,
			type: 'group',
			name: 'RESchedule',
			description:
				'A user-friendly casual work app that allows employees and employers to communicate with each other for availability and shift allocation',
			img: Reschedule,
			deployedAt: 'https://reschedule-app.herokuapp.com',
			repo: 'https://github.com/TopGek99/reschedule',
		},
		{
			key: 3,
			type: 'solo',
			name: 'Weather Dashboard',
			description:
				'An application that displays the weather in a locations specified by the user, using a third-party API',
			img: Weatherdb,
			deployedAt: 'https://topgek99.github.io/weather-dashboard',
			repo: 'https://github.com/TopGek99/weather-dashboard',
		},
		{
			key: 4,
			type: 'solo',
			name: 'Team Profile Generator',
			description:
				'An application that takes in information about a team of employees and generates a basic webpage to display them',
			img: Teamprofile,
			deployedAt:
				'https://drive.google.com/file/d/1UxccGJGmo0MLMFHSuTvjOEvren0e0eI5/view?usp=sharing',
			repo: 'https://github.com/TopGek99/team-profile-generator',
		},
		{
			key: 5,
			type: 'solo',
			name: 'Employee Directory',
			description:
				'An application that displays a list of employees (generated by a third-party application) and allows the user to search for or sort them by various categories',
			img: Empdirectory,
			deployedAt: 'https://topgek99.github.io/employee-directory/',
			repo: 'https://github.com/TopGek99/employee-directory',
		},
	];
	let projectEls = [];
	for (let i = 0; i < projects.length; i++) {
		projectEls.push(<Project project={projects[i]} />);
	}
	return (
		<section id='portfolio' className='portfolio'>
			<div className='container'>
				<div className='section-title'>
					<span>Portfolio</span>
					<h2>Portfolio</h2>
				</div>

				<div className='row' data-aos='fade-up'>
					<div className='col-lg-12 d-flex justify-content-center'>
						<ul id='portfolio-flters'>
							<li data-filter='*' className='filter-active'>
								All
							</li>
							<li data-filter='.filter-group'>Group</li>
							<li data-filter='.filter-solo'>Solo</li>
						</ul>
					</div>
				</div>

				<div
					className='row portfolio-container'
					data-aos='fade-up'
					data-aos-delay='150'
				>
					{projectEls}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
