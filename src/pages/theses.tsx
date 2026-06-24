import thesesData from "../thesis-data.json";
import { title } from "@/components/primitives";
import ThesisCard from "@/components/ThesisCard";

interface Thesis {
	id: string;
	title: string;
	subtitle: string;
	description: string[];
	type: "bachelor" | "master";
	date: string;
	institution: string;
	supervisors: string[];
	tags: string[];
	pdfUrl: string;
	githubLink: string;
	imageSrc: string;
	pageCount?: number;
	abstract: string;
	hidden?: boolean;
}

function Theses() {
	const allTheses = thesesData as Thesis[];
	if (allTheses.length === 0) return null;

	return (
		<>
			<div className="flex flex-col gap-5 flex-wrap pt-20">
				<h2
					className={title({
						underline: true,
						size: "md",
						fullWidth: true,
					})}
				>
					Academic Work
				</h2>
				<div className="flex flex-col gap-6 py-12 max-w-4xl mx-auto w-full px-4">
					{allTheses.map((thesis: Thesis) => (
						<ThesisCard key={thesis.id} thesis={thesis} />
					))}
				</div>
			</div>
		</>
	);
}

export default Theses;

