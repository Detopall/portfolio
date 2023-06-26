import { IProject } from "../App";
import ErrorMessage from "./ErrorMessage";
import Project from "./Project";
import jsonProjects from "./project-data.json";
import { useParams, useNavigate } from "react-router-dom";

function Projects() {
	const { categoryId } = useParams();
	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1);
	}

	function toTitleCase(str: string): string {
		return str
			.toLowerCase()
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	}

	if (
		(categoryId !== "software-development" &&
			categoryId !== "data-science") ||
		!jsonProjects.find((section) => section[categoryId])
	) {
		return <ErrorMessage message="Category not found" />;
	}

	return (
		<section id="projects">
			<h2>{toTitleCase(categoryId)} - Projects</h2>
			<button onClick={handleGoBack} className="go-back-button">
				Go Back
			</button>
			<div className="projects-container">
				{jsonProjects.map((section) => {
					const projects = section[categoryId];
					if (!projects) {
						return null;
					}
					return projects.map((project: IProject) => (
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
