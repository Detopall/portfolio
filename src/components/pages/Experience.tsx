import technologiesData from '../experience-data.json';

function Experience() {

	return (
		<section className="experience-container">
			<h2>Experience</h2>
			<div className="experience-content">
				<div className="experience-info">
					<p>
						These are most of the technologies, languages, frameworks,
						databases ... that I have experience in.
					</p>
					<p>
						I also have a bachelors degree in Applied Computer Science
						with a major in AI.
					</p>
				</div>

				<h3>Languages</h3>
				<div className="languages-experience">
					{technologiesData.languages.map((language, index) => (
						<img key={index} src={language.image} title={language.name} />
					))}
				</div>

				<h3>Frameworks and Libraries</h3>
				<div className="languages-experience">
					{technologiesData.frameworksAndLibraries.map((framework, index) => (
						<img key={index} src={framework.image} title={framework.name} />
					))}
				</div>

				<h3>Databases</h3>
				<div className="languages-experience">
					{technologiesData.databases.map((database, index) => (
						<img key={index} src={database.image} title={database.name} />
					))}
				</div>

				<h3>Tools</h3>
				<div className="languages-experience">
					{technologiesData.tools.map((tool, index) => (
						<img key={index} src={tool.image} title={tool.name} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
