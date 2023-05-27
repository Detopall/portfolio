import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

function Nav() {
	const [open, setOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);

	const handleClick = () => {
		setOpen(false);
	};

	const handleHamburgerClick = () => {
		setOpen(!open);
	};

	const handleResize = () => {
		const isLargeScreen = window.innerWidth > 768; // Set the desired threshold for a large screen
		setShowNav(isLargeScreen || open);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [open]);

	const navClassName = open ? "open" : showNav ? "" : "hidden";

	return (
		<>
			<div
				className={`hamburger ${open ? "open" : ""}`}
				onClick={handleHamburgerClick}
			>
				<FontAwesomeIcon
					icon={faHamburger}
					className="hamburger__icon"
				/>
			</div>
			<nav className={`nav ${navClassName}`}>
				<ul>
					<li>
						<Link to="/" onClick={handleClick}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/experience" onClick={handleClick}>
							Experience
						</Link>
					</li>
					<li>
						<Link to="/projects" onClick={handleClick}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="/contact" onClick={handleClick}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
