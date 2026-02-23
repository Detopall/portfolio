import { title } from "@/components/primitives";
import { Button } from "@heroui/react";
import { Link } from "@heroui/link";
import {
	FaLinkedin,
	FaGithub,
	FaFileAlt,
	FaMailBulk,
	FaCopy,
	FaCheck,
} from "react-icons/fa";
import { useState } from "react";

const CV_URL =
	"https://raw.githubusercontent.com/Detopall/Detopall/main/Denis-Topallaj-CV.pdf";

const EMAIL = "denis.topallaj13@gmail.com";

type ButtonColor =
	| "danger"
	| "primary"
	| "secondary"
	| "default"
	| "success"
	| "warning"
	| undefined;

function contact() {
	const [copied, setCopied] = useState(false);

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(EMAIL);
		} catch {
			const el = document.createElement("textarea");
			el.value = EMAIL;
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			document.body.removeChild(el);
		}
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const socialLinks: {
		icon: JSX.Element;
		label: string;
		color: ButtonColor;
		url: string;
	}[] = [
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
			<div className="p-16 flex flex-wrap justify-center items-center flex-col gap-6">
				<h1 className={title({ size: "md", underline: true })}>
					Contact
				</h1>
				<p className="text-default-500 text-center max-w-sm">
					Feel free to reach out — I&apos;d love to connect!
				</p>

				<div className="flex flex-col items-center gap-4 w-full max-w-md">
					<Button
						color={copied ? "success" : "danger"}
						startContent={<FaMailBulk />}
						endContent={copied ? <FaCheck /> : <FaCopy />}
						variant="ghost"
						className="w-full justify-between px-5 py-6 text-sm font-mono tracking-wide"
						onPress={handleCopyEmail}
					>
						<span className="flex-1 text-center">
							{copied ? "Copied!" : EMAIL}
						</span>
					</Button>

					<div className="flex gap-3 flex-wrap justify-center">
						{socialLinks.map(({ icon, label, color, url }) => (
							<Link key={label} href={url} isExternal>
								<Button
									color={color}
									startContent={icon}
									variant="ghost"
									className="px-5 py-5"
								>
									{label}
								</Button>
							</Link>
						))}
						<Link href={CV_URL} isExternal>
							<Button
								color="success"
								startContent={<FaFileAlt />}
								variant="ghost"
								className="px-5 py-5"
							>
								Download CV
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default contact;
