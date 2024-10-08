import { useEffect, useState } from "react";

function About() {
	const [pdfLink, setPdfLink] = useState("");

	useEffect(() => {
		(async () => {
			const fetched = await fetch(
				"https://raw.githubusercontent.com/Detopall/Detopall/main/Denis-Topallaj-CV.pdf"
			);
			if (fetched) {
				setPdfLink(fetched.url);
			}
		})();
	}, []);

	return (
		<section id="about" className="about-container">
			<h2> About </h2>
			<p>Hello there! I'm <span className="about-span">Denis Topallaj</span>, an enthusiastic applied computer science student with a keen passion for <span className="about-span">Software Engineering</span> and <span className="about-span">AI</span>. Through my journey, I've crafted projects that not only showcase my skills but also reflect my deep interest in these dynamic fields. Join me as I navigate the ever-evolving landscape of technology and bring ideas to life through code.</p>
			<p> I would love to hear from you! </p>
			<div id="badges">
				<a href="mailto:denis.topallaj13@gmail.com">
					<img
						src="https://img.shields.io/badge/Email-red?style=for-the-badge&logo=gmail&logoColor=white"
						alt="Gmail Badge"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/denis-topallaj/"
					target="_blank"
				>
					<img
						src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
						alt="LinkedIn Badge"
					/>
				</a>

				<a href="https://github.com/Detopall/" target="_blank">
					<img src="https://img.shields.io/badge/GitHub-100?style=for-the-badge&logo=github&logoColor=white" />
				</a>

				{pdfLink ? (
					<a href={pdfLink} target="_blank">
						<img src="https://img.shields.io/badge/CV-white?logo=google-docs&logoColor=red" />
					</a>
				) : (
					<div>PDF Loading ... </div>
				)}
			</div>
		</section>
	);
}

export default About;
