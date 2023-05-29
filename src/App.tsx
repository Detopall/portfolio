import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SingleProject from "./components/SingleProject";

export interface IProject {
	id: string;
	name: string;
	descriptionShort: string;
	descriptionLong?: string[] | [];
	developmentStack?: {
		src: string | null,
		title: string | null
	}[],
	imageSrc: string;
	linkTo: string;
	githubLink?: string;
	youtubeLink?: string;
}

function App() {
	return (
		<div className="App">
			<Nav />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:projectId" element={<SingleProject />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
