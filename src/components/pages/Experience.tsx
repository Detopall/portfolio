import technologiesData from "../experience-data.json";

function Experience() {
	return (
		<section className="experience-container">
			<h2>Experience</h2>
			<div className="experience-content">
				<div className="experience-info">
					<p>
						As a student at University of Gent, I have gained experience in
						various programming languages, frameworks, databases and tools.
					</p>
					<p>
						I have obtained a bachelor's degree in Applied Computer Science and
						I'm currently pursuing a master's degree in Computer Science.
					</p>
					<p>
						The following are some of the technologies I have experience with.
						In the 'Projects' section you can view some of my projects where I used them.
					</p>
				</div>

				{/* Languages */}
				<div className="experience-category">
					<h3>Languages</h3>
					<div className="experience-grid">
						{technologiesData.languages.map((language, index) => (
							<div key={index} className="experience-item">
								<img
									src={language.image}
									alt={language.name}
									title={language.name}
								/>
								<span>{language.name}</span>
							</div>
						))}
					</div>
				</div>

				{/* Frameworks and Libraries */}
				<div className="experience-category">
					<h3>Frameworks and Libraries</h3>
					<div className="experience-grid">
						{technologiesData.frameworksAndLibraries.map((framework, index) => (
							<div key={index} className="experience-item">
								<img
									src={framework.image}
									alt={framework.name}
									title={framework.name}
								/>
								<span>{framework.name}</span>
							</div>
						))}
					</div>
				</div>

				{/* Databases */}
				<div className="experience-category">
					<h3>Databases</h3>
					<div className="experience-grid">
						{technologiesData.databases.map((database, index) => (
							<div key={index} className="experience-item">
								<img
									src={database.image}
									alt={database.name}
									title={database.name}
								/>
								<span>{database.name}</span>
							</div>
						))}
					</div>
				</div>

				{/* Tools */}
				<div className="experience-category">
					<h3>Tools</h3>
					<div className="experience-grid">
						{technologiesData.tools.map((tool, index) => (
							<div key={index} className="experience-item">
								<img src={tool.image} alt={tool.name} title={tool.name} />
								<span>{tool.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
