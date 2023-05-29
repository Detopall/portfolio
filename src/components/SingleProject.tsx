import { useParams } from "react-router-dom";
import jsonProjects from "./project-data.json";
import { IProject } from "../App";
import { useEffect, useState } from "react";

function SingleProject() {
	const { projectId } = useParams();
	const project = jsonProjects.filter(
		(project: IProject) => project.id === projectId
	)[0];
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
		};

		checkScreenSize();

		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<div className="single-project">
			<h1> {project.name}</h1>
			<img
				src={project.imageSrc}
				title={project.name}
				className="single-project-main-img"
			/>
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

			<div className="single-project-github-container">
				<a href={project.githubLink} target="_blank">
					<button>Github Project</button>
				</a>
			</div>
			{isSmallScreen ? (
				<div className="single-project-video">
					<a
						href={project.youtubeLink}
						target="_blank"
						rel="noopener noreferrer"
						className="single-project-video-link"
					>
						Watch Video
					</a>
				</div>
			) : (
				<div className="single-project-video">
					<iframe
						width="560"
						height="315"
						src={project.youtubeLink}
						title={project.name}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			)}
		</div>
	);
}

export default SingleProject;
