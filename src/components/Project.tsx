import { Link } from "react-router-dom";

interface IProject {
	title: string;
	description: string;
	image: string;
	link: string;
}

function Project({ title, description, image, link }: IProject) {
	return (
		<>
			<Link to={link}>
				<div className="project">
					<div className="project-description">
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
					<div className="project-img">
						<img src={image} alt={title} />
					</div>
				</div>
			</Link>
		</>
	);
}

export default Project;
