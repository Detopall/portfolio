import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import { Card, CardBody } from "@heroui/card";
import technologiesData from "../experience-data.json";
import { title } from "@/components/primitives";

function Experience() {
	const experiences = [
		{
			title: "Education",
			degrees: [
				{
					title: "BSc Applied CS - cum laude",
					institution: "University of Applied Sciences Howest",
				},
				{
					title: "MSc Computer Science",
					institution: "University of Hasselt (ongoing)",
				},
			],
			type: "education",
			icon: "🎓",
		},
		{
			title: "ML Engineer Intern",
			institution: "ML6",
			type: "work",
			icon: "💼",
			url: "https://www.ml6.eu/",
			achievements: [
				"Created 10+ Biology and AI components for Fondant pipeline with Docker",
				"Assisted with full stack DBTL pipeline application",
				"Found and solved critical issues in the Fondant framework",
			],
		},
	];

	return (
		<div className="container mx-auto px-4 py-16 max-w-6xl">
			<style>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-10px); }
				}
				
				@keyframes float-delayed {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-8px); }
				}

				.card-3d {
					transform-style: preserve-3d;
					transition: transform 0.3s ease;
				}

				.card-3d:hover {
					transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-8px);
				}

				.icon-float {
					animation: float 3s ease-in-out infinite;
				}

				.icon-float-delayed {
					animation: float-delayed 3.5s ease-in-out infinite;
				}

				.tech-icon-hover {
					transition: all 0.2s ease;
				}

				.tech-icon-hover:hover {
					transform: scale(1.15) translateY(-4px);
					filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
				}

				.card-inner {
					transform: translateZ(20px);
				}

				.gradient-border {
					position: relative;
				}

				.gradient-border::before {
					content: '';
					position: absolute;
					inset: 0;
					border-radius: inherit;
					padding: 1px;
					background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1));
					-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
					-webkit-mask-composite: xor;
					mask-composite: exclude;
					opacity: 0;
					transition: opacity 0.3s;
				}

				.gradient-border:hover::before {
					opacity: 1;
				}
			`}</style>

			<div className="flex flex-col items-center">
				<div className="mb-10">
					<h2
						className={title({
							underline: true,
							size: "md",
							fullWidth: true,
						})}
					>
						Experience
					</h2>
				</div>

				<div className="w-full max-w-6xl">
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{experiences.map((exp, index) => (
							<Card
								key={index}
								className={`card-3d gradient-border bg-gradient-to-br ${
									exp.type === "education"
										? "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"
										: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"
								} hover:shadow-xl transition-all duration-300`}
							>
								<CardBody className="p-6">
									<div className="flex items-start gap-4 card-inner">
										<div
											className={`text-2xl ${index === 0 ? "icon-float" : "icon-float-delayed"}`}
										>
											{exp.icon}
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-bold mb-2">
												{exp.title}
											</h3>
											{exp.degrees ? (
												<div className="space-y-3">
													{exp.degrees.map(
														(degree, i) => (
															<div
																key={i}
																className="border-l-2 border-blue-300 dark:border-blue-600 pl-3 transition-all duration-200 hover:border-l-4 hover:pl-4"
															>
																<h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
																	{
																		degree.title
																	}
																</h4>
																<p className="text-xs text-gray-600 dark:text-gray-400">
																	{
																		degree.institution
																	}
																</p>
															</div>
														),
													)}
												</div>
											) : (
												<>
													<p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
														{exp.url ? (
															<a
																href={exp.url}
																target="_blank"
																className="text-green-600 underline dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
															>
																{
																	exp.institution
																}
															</a>
														) : (
															exp.institution
														)}
													</p>
													{exp.achievements && (
														<ul className="space-y-2 text-sm">
															{exp.achievements.map(
																(
																	achievement,
																	i,
																) => (
																	<li
																		key={i}
																		className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1"
																	>
																		<span className="text-green-500 mt-1">
																			•
																		</span>
																		<span>
																			{achievement.includes(
																				"Fondant",
																			) ? (
																				<span>
																					{
																						achievement.split(
																							"Fondant",
																						)[0]
																					}
																					<a
																						href="https://fondant.ai/en/latest/"
																						target="_blank"
																						className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
																					>
																						Fondant
																					</a>
																					{
																						achievement.split(
																							"Fondant",
																						)[1]
																					}
																				</span>
																			) : (
																				achievement
																			)}
																		</span>
																	</li>
																),
															)}
														</ul>
													)}
												</>
											)}
										</div>
									</div>
								</CardBody>
							</Card>
						))}

						{Object.entries(technologiesData).map(
							([category, items], catIndex) => (
								<Card
									key={category}
									className="card-3d gradient-border bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-xl transition-all duration-300"
								>
									<CardBody className="p-6">
										<div className="flex items-start gap-4 card-inner">
											<div
												className={`text-2xl ${catIndex % 2 === 0 ? "icon-float" : "icon-float-delayed"}`}
											>
												{category === "Languages"
													? "💻"
													: category === "Databases"
														? "🗃️"
														: category ===
															  "Frameworks and Libraries"
															? "🔧"
															: category ===
																  "Tools"
																? "🛠️"
																: "⚡"}
											</div>
											<div className="flex-1">
												<h3 className="text-lg font-bold mb-4">
													{category
														.replace(
															/([A-Z])/g,
															" $1",
														)
														.trim()}
												</h3>
												<div className="grid grid-cols-4 gap-3">
													{items
														.slice(0, 8)
														.map((item, index) => (
															<Tooltip
																key={index}
																content={
																	item.name
																}
																placement="top"
																className="text-sm"
															>
																<div className="tech-icon-hover cursor-pointer">
																	<Image
																		src={
																			item.image
																		}
																		alt={
																			item.name
																		}
																		className="w-12 h-12 object-contain bg-white p-1 rounded-lg mx-auto"
																	/>
																</div>
															</Tooltip>
														))}
												</div>
												{items.length > 8 && (
													<p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
														+{items.length - 8} more
													</p>
												)}
											</div>
										</div>
									</CardBody>
								</Card>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
