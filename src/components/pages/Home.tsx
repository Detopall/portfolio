import { Link } from "react-router-dom";

function Home() {
	return (
		<section className="hero-section">
			<h1 className="hero-name"> Hi, I'm Denis Topallaj</h1>
			<p className="hero-title-description">
				Data Scientist | Software Developer
			</p>
			<p className="hero-description">
				Be sure to check out my
				<span className="hero-span first-hero-span"> 
					<Link to="/experience">Experience</Link>
				</span>
				,
				<span className="hero-span">
					<Link to="/projects">Projects</Link>
				</span>
				and
				<span className="hero-span">
					<Link to="/blogs">Blogs</Link>
				</span>
				or learn more
				<span className="hero-span">
					<Link to="/about">About</Link>
				</span>
				me!
			</p>
		</section>
	);
}

export default Home;
