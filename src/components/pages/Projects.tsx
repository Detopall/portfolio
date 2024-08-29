import { IProject } from "../../App";
import ErrorMessage from "../ErrorMessage";
import Project from "./Project";
import jsonProjects from "../project-data.json";

interface ProjectSection {
	[key: string]: IProject[] | undefined;
}

function Projects() {
	const allProjects: IProject[] = jsonProjects.flatMap((section: ProjectSection) =>
		Object.values(section)
			.flat()
			.filter((project) => !!project) as IProject[]
	);

	if (allProjects.length === 0) {
		return <ErrorMessage message="No projects found" />;
	}

	return (
		<section id="projects">
			<h2>Projects</h2>
			<div className="projects-container">
				{allProjects.map((project: IProject) => (
					<Project
						key={project.id}
						id={project.id}
						name={project.name}
						descriptionShort={project.descriptionShort}
						imageSrc={project.imageSrc}
						linkTo={project.linkTo}
						demoLink={project.demoLink}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
