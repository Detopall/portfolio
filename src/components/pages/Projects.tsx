import React, { useState } from "react";
import { IProject } from "../../App";
import ErrorMessage from "../ErrorMessage";
import Project from "./Project";
import jsonProjects from "../project-data.json";

interface ProjectSection {
	[key: string]: IProject[] | undefined;
}

function Projects() {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");

	const toTitleCase = (str: string): string => {
		return str
			.toLowerCase()
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	): void => {
		setSelectedCategory(event.target.value);
	};

	const filteredProjects: IProject[] =
		selectedCategory === "all"
			? jsonProjects.flatMap((section: ProjectSection) =>
				Object.values(section)
					.flat()
					.filter((project) => !!project) as IProject[]
			)
			: (jsonProjects.flatMap(
				(section: ProjectSection) => section[selectedCategory] || []
			) as IProject[]);

	if (filteredProjects.length === 0) {
		return <ErrorMessage message="Category not found" />;
	}

	return (
		<section id="projects">
			<div className="category-filter-container">
				<label htmlFor="categoryFilter">Filter by Category:</label>
				<select
					id="categoryFilter"
					value={selectedCategory}
					onChange={handleCategoryChange}
				>
					<option value="all">All</option>
					<option value="software-development">Software Development</option>
					<option value="data-science">Data Science</option>
				</select>
			</div>
			<h2>{toTitleCase(selectedCategory)} - Projects</h2>
			<div className="projects-container">
				{filteredProjects.map((project: IProject) => (
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
