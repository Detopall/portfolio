import Project from "./Project";
import jsonProjects from "./project-data.json";

function Projects() {
	return (
		<section id="projects">
			<h2>Projects</h2>
			<div className="projects-container">
				{
					jsonProjects.map((project) => {
						return (
							<Project
								key={project.projectName}
								title={project.projectName}
								description={project.projectDescription}
								image={project.projectImg}
								link={project.linkTo}
							/>
						);
					})
				}
			</div>
		</section>
	);
}

export default Projects;
