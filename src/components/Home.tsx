import { Link } from "react-router-dom";

function Home() {
	return (
		<section className="hero-section">
			<h1 className="hero-name"> Hi, I'm Denis Topallaj</h1>
			<p className="hero-title-description">
				Data Scientist | Software Developer
			</p>
			<p>
				Be sure to check out my
				<span className="hero-span"> 
					<Link to="/experience">Experience</Link>
				</span>
				and
				<span className="hero-span">
					<Link to="/projects">Projects</Link>
				</span>
				or
				<span className="hero-span">
					<Link to="/contact">Contact</Link>
				</span>
				me!
			</p>
		</section>
	);
}

export default Home;
