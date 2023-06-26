import Project from "./Project";
import jsonProjects from "./project-data.json";

function Projects() {
	return (
		<section id="projects">
			<h2>Projects</h2>
			<div className="projects-container">
				{jsonProjects.map((section) => {
					const projects =
						section["data-science"] ||
						section["software-development"];
					return projects.map((project) => (
						<Project
							key={project.id}
							id={project.id}
							name={project.name}
							descriptionShort={project.descriptionShort}
							imageSrc={project.imageSrc}
							linkTo={project.linkTo}
						/>
					));
				})}
			</div>
		</section>
	);
}

export default Projects;
