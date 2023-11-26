import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
	if (!link) return;
    setActiveLink(link);
    toggleNav();
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
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={activeLink === "/" ? "nav-link-active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={() => handleLinkClick("/experience")}
              className={activeLink === "/experience" ? "nav-link-active" : ""}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => handleLinkClick("/projects")}
              className={activeLink === "/projects" ? "nav-link-active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => handleLinkClick("/blogs")}
              className={activeLink === "/blogs" ? "nav-link-active" : ""}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={activeLink === "/about" ? "nav-link-active" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
