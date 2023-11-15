import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className={`hamburger ${isOpen ? "open" : ""}`}>
				<FontAwesomeIcon
					icon={faHamburger}
					className="hamburger__icon"
					onClick={toggleNav}
				/>
			</div>
			<nav className={`nav ${isOpen ? "open" : ""}`}>
				<ul>
					<li>
						<Link to="/" onClick={toggleNav}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/experience" onClick={toggleNav}>
							Experience
						</Link>
					</li>
					<li>
						<Link to="/projects" onClick={toggleNav}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="/blogs" onClick={toggleNav}>
							Blogs
						</Link>
					</li>
					<li>
						<Link to="/about" onClick={toggleNav}>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
