import { useParams } from "react-router-dom";
import jsonProjects from "./project-data.json";
import { IProject } from "../App";

function SingleProject() {
	const { projectId } = useParams();
	const project = jsonProjects.filter(
		(project: IProject) => project.id === projectId
	)[0];
	return (
		<div className="single-project">
			<h1> {project.name}</h1>
			<img src={project.imageSrc} title={project.name} />
			<div className="single-project-description">
				{project.descriptionLong?.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
			<div className="single-project-dev-images">
				{project.developmentStack?.map((image, index) => (
					<img key={index} src={image.src} title={image.title} />
				))}
			</div>
		</div>
	);
}

export default SingleProject;
