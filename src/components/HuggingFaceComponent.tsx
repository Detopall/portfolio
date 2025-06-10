import { useState, useEffect } from "react";
import { Chip, Tooltip } from "@heroui/react";

const HeartIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 3c-1.535 0-3.078.5-4.25 1.7-2.343 2.4-2.279 6.1 0 8.5L12 23l9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-.75.8-.75-.8C10.078 3.5 8.536 3 7 3" fill="#e74c3c" />
	</svg>
);

function extractSpaceId(demoLink: string): string | null {
	// Expects a link like https://huggingface.co/spaces/DenisT/manga-translator
	const match = demoLink.match(/huggingface\.co\/spaces\/([^/]+\/[^/]+)/);
	return match ? match[1] : null;
}

function HuggingFaceComponent({ demoLink }: { demoLink: string }) {
	const [hearts, setHearts] = useState<number | null>(null);

	useEffect(() => {
		const spaceId = extractSpaceId(demoLink);
		if (!spaceId) {
			setHearts(null);
			return;
		}

		fetch(`https://huggingface.co/api/spaces/${spaceId}`)
			.then(res => res.json())
			.then(data => {
				setHearts(typeof data.likes === "number" ? data.likes : 0);
			})
			.catch(() => setHearts(null));
	}, [demoLink]);

	return (
		<Tooltip key={demoLink} content={"HuggingFace Likes"}>
			<Chip color="secondary" variant="shadow">
				<div className="flex items-center">
					<HeartIcon />
					<span className="font-semibold ml-1">
						{hearts === null ? "—" : hearts}
					</span>
				</div>
			</Chip>
		</Tooltip>
	);
}

export default HuggingFaceComponent;

