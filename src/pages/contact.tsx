import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
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



function contact() {
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
		<>
			<div className="p-16 flex flex-wrap justify-center items-center flex-col">
				<h1 className={title({ size: "md", underline: true })}>Contact</h1>
				<p>Feel free to contact me!</p>
				<div className="flex gap-4 m-5 flex-wrap justify-center">
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
			</div>
		</>
	);
};

export default contact;
