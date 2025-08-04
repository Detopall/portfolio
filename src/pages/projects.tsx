import projectsData from "../project-data.json";
import { title } from "@/components/primitives";
import Project from "@/components/project";

function Projects({ theme }: { theme: string }) {
	return (
		<>
			<h2 className={title({ size: "lg", underline: true })}>Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-items-center max-w-7xl mx-auto">
				{projectsData.map((project) => (
					<Project key={project.id} project={project} theme={theme} />
				))}
			</div>
		</>
	);
}

export default Projects;
