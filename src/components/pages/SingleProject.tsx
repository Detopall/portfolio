import { useParams } from "react-router-dom";
import jsonProjects from "../project-data.json";
import { IProject, IDevImg } from "../../App";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import GoBackButton from "../GoBackButton";

function SingleProject() {
	const { categoryId, projectId } = useParams();

	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
		};

		checkScreenSize();

		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	if (
		categoryId !== "software-development" &&
		categoryId !== "data-science"
	) {
		return <ErrorMessage message="Category not found" />;
	}

	const categoryProjects = jsonProjects.find(
		(section) => section[categoryId]
	);

	if (!categoryProjects) {
		return <ErrorMessage message="Category not found" />;
	}

	const projects = categoryProjects[categoryId];

	if (!projects) {
		return <ErrorMessage message="Projects not found" />;
	}

	const project = projects.find(
		(project: IProject) => project.id === projectId
	);

	if (!project) {
		return <ErrorMessage message="Project not found" />;
	}

	return (
		<>
			<GoBackButton />
			<div className="single-project">
				<h1>{project.name}</h1>
				<img
					src={project.imageSrc}
					title={project.name}
					className="single-project-main-img"
				/>
				<div className="single-project-description">
					{project.descriptionLong?.map(
						(paragraph: string, index: number) => (
							<p key={index}>{paragraph}</p>
						)
					)}
				</div>
				<div className="single-project-dev-images">
					{project.developmentStack?.map(
						(image: IDevImg, index: number) => (
							<img
								key={index}
								src={image.src}
								title={image.title}
							/>
						)
					)}
				</div>

				<div className="single-project-github-container">
					<a
						href={project.githubLink}
						target="_blank"
						rel="noopener noreferrer"
					>
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
		</>
	);
}

export default SingleProject;
