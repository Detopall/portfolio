import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/react";
import { Link } from "@heroui/link";
import { FaLinkedin, FaGithub, FaFileAlt, FaMailBulk } from "react-icons/fa";

const CV_URL =
	"https://raw.githubusercontent.com/Detopall/Detopall/main/Denis-Topallaj-CV.pdf";

type ButtonColor =
	| "danger"
	| "primary"
	| "secondary"
	| "default"
	| "success"
	| "warning"
	| undefined;

export default function AboutPage() {
	const socialLinks: {
		icon: JSX.Element;
		label: string;
		color: ButtonColor;
		url: string;
	}[] = [
		{
			icon: <FaMailBulk />,
			label: "Contact Me",
			color: "danger",
			url: "mailto:denis.topallaj13@gmail.com",
		},
		{
			icon: <FaLinkedin />,
			label: "LinkedIn",
			color: "primary",
			url: "https://www.linkedin.com/in/denis-topallaj/",
		},
		{
			icon: <FaGithub />,
			label: "GitHub",
			color: "secondary",
			url: "https://github.com/detopall",
		},
	];

	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 max-w-4xl mx-auto px-4">
				<h2 className={title({ size: "lg", underline: true })}>About Me</h2>
				<div className="text-center space-y-4">
					<p>
						Hello there! I'm Denis Topallaj, an enthusiastic computer
						science student with a keen passion for Software Engineering and AI.
					</p>
					<p>
						Throughout my journey, I've crafted projects that not only showcase my
						skills but also reflect my deep understanding in these dynamic fields and personal interests.
					</p>
					<p>
						I'm eager to connect with like-minded individuals, collaborate on
						projects, and explore the exciting possibilities that lie ahead.
					</p>
				</div>

				<div className="flex gap-4 mt-6 flex-wrap justify-center">
					{socialLinks.map(({ icon, label, color, url }) => (
						<Link key={label} href={url} isExternal>
							<Button color={color} startContent={icon} variant="ghost">
								{label}
							</Button>
						</Link>
					))}
					<Link href={CV_URL} isExternal>
						<Button
							color="success"
							startContent={<FaFileAlt />}
							variant="ghost"
						>
							Download CV
						</Button>
					</Link>
				</div>
			</section>
		</DefaultLayout>
	);
}
