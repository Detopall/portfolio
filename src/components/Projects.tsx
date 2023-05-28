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
								key={project.id}
								id={project.id}
								name={project.name}
								descriptionShort={project.descriptionShort}
								imageSrc={project.imageSrc}
								linkTo={project.linkTo}
							/>
						);
					})
				}
			</div>
		</section>
	);
}

export default Projects;
