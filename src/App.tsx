import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import SingleProject from "./components/SingleProject";
import CategoryProjects from "./components/CategoryProjects";

export interface IProjectContainer {
	"software-development": IProject[];
	"data-science": IProject[];
}

export interface IProject {
	id: string;
	name: string;
	descriptionShort: string;
	descriptionLong?: string[] | [];
	developmentStack?: {
		src: string | null;
		title: string | null;
	}[];
	imageSrc: string;
	linkTo: string;
	githubLink?: string;
	youtubeLink?: string;
}

export interface IDevImg {
	src: string;
	title: string;
}

function App() {
	return (
		<div className="App">
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/projects" element={<CategoryProjects />} />
				<Route path="/projects/:categoryId" element={<Projects />} />
				<Route
					path="/projects/:categoryId/:projectId"
					element={<SingleProject />}
				/>
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
