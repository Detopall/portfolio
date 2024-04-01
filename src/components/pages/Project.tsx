import { Link } from "react-router-dom";
import { IProject } from "../../App";

function Project({ name, descriptionShort, imageSrc, linkTo, demoLink }: IProject) {
	const demoAvailable = demoLink ? <div className="pulse-small"></div> : null;

	return (
		<>
			<Link to={linkTo}>
				<div className="project">
					<div className="project-description">
						<h3>{name}{demoAvailable}</h3>
						<p>{descriptionShort}</p>
					</div>
					<div className="project-img">
						<img src={imageSrc} alt={name} />
					</div>
				</div>
			</Link>
		</>
	);
}

export default Project;
