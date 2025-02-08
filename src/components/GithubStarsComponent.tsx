import { useState, useEffect } from "react";
import { Chip, Tooltip } from "@heroui/react";

interface IconProps {
	fill?: string;
	size?: number;
	height?: number;
	width?: number;
	className?: string;
}

const StarIcon = ({
	fill = "currentColor",
	size,
	height,
	width,
	...props
}: IconProps) => {
	return (
		<svg
			fill="yellow"
			height={size || height || 24}
			viewBox="0 0 24 24"
			width={size || width || 24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
				stroke={fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={0.0}
			/>
		</svg>
	);
};

function GithubStarsComponent({ repoUrl }: { repoUrl: string }) {

	const [stars, setStars] = useState(0);

	useEffect(() => {
		const parts = repoUrl.split("/");
		const repo = parts[parts.length - 1];
		const username = "Detopall";

		fetch(`https://api.github.com/repos/${username}/${repo}`)
			.then((response) => response.json())
			.then((data) => setStars(data.stargazers_count))
			.catch((error) => console.error("Error fetching stars:", error));
	}, [repoUrl]);


	return (
		<Tooltip key={repoUrl} content={"GitHub Stars"}>
			<Chip color="secondary" variant="shadow">
				<div className="flex items-center">
					<StarIcon className="text-yellow-400 mr-1" />
					<span className="font-semibold">{stars}</span>
				</div>
			</Chip>
		</Tooltip>
	);
}

export default GithubStarsComponent;
