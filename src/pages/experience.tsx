import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import technologiesData from "../experience-data.json";

function Experience() {
	return (
		<section className="container mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
			<div className="space-y-8">
				<div className="bg-content1 p-6 rounded-lg shadow-lg">
					<p className="mb-4">
						As a student of the University of Gent, I have gained experience in
						various programming languages, frameworks, databases and tools.
					</p>
					<p className="mb-4">
						I have obtained a bachelor's degree in Applied Computer Science and
						I'm currently pursuing a master's degree in Industrial Engineering
						for Computer Science.
					</p>
				</div>

				{Object.entries(technologiesData).map(([category, items]) => (
					<div key={category} className="bg-content1 p-6 rounded-3xl shadow-lg">
						<h3 className="text-2xl font-semibold mb-4 capitalize">
							{category.replace(/([A-Z])/g, " $1").trim()}
						</h3>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
							{items.map((item, index) => (
								<Tooltip key={index} content={item.name}>
									<div className="flex flex-col items-center space-y-2">
										<div className="bg-white rounded-xl p-2">
											<Image
												src={item.image}
												alt={item.name}
												className="w-16 h-16 object-contain"
											/>
										</div>
									</div>
								</Tooltip>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Experience;
