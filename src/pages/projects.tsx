import projectsData from "../project-data.json";
import { title } from "@/components/primitives";
import Project from "@/components/project";

function Projects({ theme: string }: { theme: string }) {
	return (
		<>
			<h2 className={title({ size: "lg", underline: true })}>Projects</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
				{projectsData.map((project) => (
					<Project key={project.id} project={project} theme={string} />
				))}
			</div>
		</>
	);
}

export default Projects;
