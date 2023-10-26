import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Nav from "./components/Nav";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import SingleProject from "./components/pages/SingleProject";
import CategoryProjects from "./components/pages/CategoryProjects";
import Events from "./components/pages/Events";
import SingleEvent from "./components/pages/SingleEvent";

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

export interface IEvent {
	id: string;
	name: string;
	descriptionShort: string;
	descriptionLong: string[];
	date: string;
	imageSrc: string;
	linkTo: string;
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
				<Route path="/events" element={<Events />} />
				<Route path="/events/:eventId" element={<SingleEvent />} />
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
