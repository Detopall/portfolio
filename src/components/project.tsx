import { useState } from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import GithubStarsComponent  from "./GithubStarsComponent";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "@heroui/modal";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";

interface Project {
	name: string;
	imageSrc: string;
	description: string[];
	developmentStack: {
		title: string;
		src: string;
	}[];
	demoLink?: string;
	youtubeLink: string;
	githubLink: string;
}

function Project({ project, theme }: { project: Project; theme: string }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<Card
				isPressable
				isFooterBlurred
				onPress={handleOpen}
				className="relative bg-gradient-to-br transition-all duration-300 h-[300px] overflow-hidden hover:scale-105"
			>
				<CardBody className="p-0 overflow-hidden flex">
					<Image
						src={project.imageSrc}
						alt={project.name}
						className="w-full h-full object-cover"
					/>
				</CardBody>
				<CardFooter className="absolute bottom-0 w-full bg-white/10 border border-white/20 py-2 px-3 rounded-b-lg flex flex-col items-start justify-between z-10">
					<div className="flex justify-between items-center w-full">
						{theme === "dark" ? (
							<h4 className="[text-shadow:0px_0px_5px_rgba(0,0,0,0.9)] text-600 text-xl md:text-2xl font-extrabold">
								{project.name}
							</h4>
						) : (
							<h4 className="[text-shadow:0_0_5px_rgba(255,255,255,0.9)] text-600 text-xl md:text-2xl font-extrabold">
								{project.name}
							</h4>
						)}
						<GithubStarsComponent repoUrl={project.githubLink} />
					</div>

					<div className="flex mt-2 space-x-2">
						{project.developmentStack.map((tech, index) => (
							<Tooltip key={index} content={tech.title}>
								<Image src={tech.src} alt={tech.title} className="w-10 h-10" />
							</Tooltip>
						))}
					</div>
				</CardFooter>
			</Card>

			<Modal
				isOpen={isOpen}
				onClose={handleClose}
				backdrop="blur"
				className="flex items-center justify-center bg-background/80 backdrop-blur-md border border-primary-500"
				size="5xl"
			>
				<ModalContent className="max-h-[90vh] overflow-hidden">
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col items-center gap-5">
								<h3 className="text-3xl font-extrabold text-primary-600 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
									{project.name}
								</h3>
								<GithubStarsComponent repoUrl={project.githubLink} />
							</ModalHeader>
							<ModalBody className="overflow-y-auto">
								<div className="flex flex-col items-center">
									<Image
										src={project.imageSrc}
										alt={project.name}
										className="w-full h-64 object-cover rounded-lg mb-6"
									/>
									{project.description.map((paragraph, index) => (
										<p
											key={index}
											className="mb-4 text-foreground/90 text-center leading-relaxed"
										>
											{paragraph}
										</p>
									))}
									<div className="mt-6 flex flex-col items-center w-full">
										<h4 className="font-bold text-xl mb-4 text-primary-500 border-b-2 border-primary-300 pb-2">
											Technologies Used
										</h4>
										<div className="flex flex-wrap gap-4 justify-center">
											{project.developmentStack.map((tech, index) => (
												<Tooltip key={index} content={tech.title}>
													<div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
														<Image
															src={tech.src}
															alt={tech.title}
															className="w-16 h-16 object-contain"
														/>
													</div>
												</Tooltip>
											))}
										</div>

										<h4 className="font-bold text-xl mt-8 mb-4 text-primary-500 border-b-2 border-primary-300 pb-2">
											Project Demo
										</h4>
										<iframe
											src={project.youtubeLink}
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
											className="w-96 h-96 rounded-lg shadow-lg"
										></iframe>
									</div>
								</div>
							</ModalBody>
							<ModalFooter className="flex justify-center gap-4 border-t border-primary-200">
								<Link
									href={project.githubLink}
									isExternal
									showAnchorIcon
									className="font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-300"
								>
									View on GitHub
								</Link>
								{project.demoLink && (
									<Link
										href={project.demoLink}
										isExternal
										showAnchorIcon
										className="font-semibold text-secondary-600 hover:text-secondary-700 transition-colors duration-300"
									>
										Live Demo
									</Link>
								)}
								<Button
									color="danger"
									variant="light"
									onPress={onClose}
									className="font-semibold"
								>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

export default Project;
