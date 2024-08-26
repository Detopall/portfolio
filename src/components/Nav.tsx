import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navLinks = [
	{ path: "/", text: "Home" },
	{ path: "/experience", text: "Experience" },
	{ path: "/projects", text: "Projects" },
	{ path: "/blogs", text: "Blogs" },
	{ path: "/about", text: "About" },
];

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

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
					{navLinks.map((link) => (
						<li key={link.path}>
							<Link
								to={link.path}
								onClick={toggleNav}
								className={
									location.pathname === link.path
										? "nav-link-active"
										: "nav-link"
								}
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default Nav;
