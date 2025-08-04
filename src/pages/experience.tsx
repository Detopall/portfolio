import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import technologiesData from "../experience-data.json";
import { title } from "@/components/primitives";

function Experience() {
	return (
		<section className="container mx-auto px-4 py-12 max-w-6xl">
			<h2
				className={`${title({ size: "lg", underline: true })} text-center mb-8`}
			>
				Experience
			</h2>
			<div className="space-y-8">
				<div className="bg-content1 p-6 rounded-lg shadow-lg">
					<p className="mb-4">
						As a student of the University of Hasselt, I have gained experience in
						various programming languages, frameworks, databases and tools.
					</p>
					<p className="mb-4">
						I have obtained a bachelor's degree in Applied Computer Science and
						I'm currently pursuing a master's degree in Computer Science.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{Object.entries(technologiesData).map(([category, items]) => (
						<div key={category} className="bg-content1 p-6 rounded-3xl shadow-lg">
							<h3 className="text-2xl font-semibold mb-4 capitalize">
								{category.replace(/([A-Z])/g, " $1").trim()}
							</h3>
							<div className="flex flex-wrap gap-4 justify-center">
								{items.map((item, index) => (
									<Tooltip key={index} content={item.name}>
										<div className="flex flex-col items-center space-y-2">
											<div className="bg-white rounded-xl p-2">
												<Image
													src={item.image}
													alt={item.name}
													className="w-20 h-20 object-contain"
												/>
											</div>
											<p className="text-center font-semibold">{item.name}</p>
										</div>
									</Tooltip>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
