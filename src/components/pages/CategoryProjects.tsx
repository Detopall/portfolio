import { Link } from "react-router-dom";

function CategoryProjects() {
	return (
		<section className="category-projects-container">
			<h2>Projects</h2>
			<div className="category-projects">
				<Link to="/projects/software-development">
					<div className="category">
						<h3>Software Development</h3>
						<p>
							Click here to explore my Software Development
							projects!
						</p>
					</div>
				</Link>
				<Link to="/projects/data-science">
					<div className="category">
						<h3>Data Science</h3>
						<p>Click here to explore my Data Science projects!</p>
					</div>
				</Link>
			</div>
		</section>
	);
}

export default CategoryProjects;
