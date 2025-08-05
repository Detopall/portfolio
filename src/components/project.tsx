import { useState, useRef, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import GithubStarsComponent from "./GithubStarsComponent";
import HuggingFaceComponent from "./HuggingFaceComponent";
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

function Project({ project }: { project: Project; theme: string }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const cardInnerRef = useRef<HTMLDivElement | null>(null);
	const flareRef = useRef<HTMLDivElement | null>(null);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	useEffect(() => {
		const container = containerRef.current;
		const cardInner = cardInnerRef.current;
		const flare = flareRef.current;
		if (!container || !cardInner || !flare) return;

		const maxTilt = 25;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const normX = x / rect.width;
			const normY = y / rect.height;

			const tiltX = (normY - 0.5) * maxTilt;
			const tiltY = -(normX - 0.5) * maxTilt;

			cardInner.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05,1.05,1.05)`;

			flare.style.opacity = "0.6";
			flare.style.left = `${x}px`;
			flare.style.top = `${y}px`;
		};

		const handleMouseEnter = () => {
			setIsHovered(true);
		};

		const handleMouseLeave = () => {
			setIsHovered(false);
			cardInner.style.transform = "";
			flare.style.opacity = "0";
		};

		container.addEventListener("mousemove", handleMouseMove);
		container.addEventListener("mouseenter", handleMouseEnter);
		container.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			container.removeEventListener("mousemove", handleMouseMove);
			container.removeEventListener("mouseenter", handleMouseEnter);
			container.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<>
			{/* fixed-size perspective container */}
			<div
				ref={containerRef}
				className="relative"
				style={{
					perspective: "1000px",
					width: "320px",
					height: "400px",
					minWidth: "320px",
					minHeight: "400px",
				}}
			>
				{/* tilt wrapper */}
				<div
					ref={cardInnerRef}
					className="relative h-full"
					style={{
						transformStyle: "preserve-3d",
						transition: "transform 0.23s cubic-bezier(.22,.7,.56,1.03)",
					}}
				>
					{/* Card border/frame */}
					<div
						className={`absolute inset-0 rounded-xl transition-all duration-300 ${isHovered
							? 'bg-gradient-to-br from-white via-gray-200 to-gray-300 shadow-2xl'
							: 'bg-transparent'
							}`}
						style={{
							transform: isHovered ? 'translateZ(-8px)' : 'translateZ(0px)',
						}}
					/>

					{/* Inner card border */}
					<div
						className={`absolute inset-1 rounded-lg transition-all duration-300 ${isHovered
							? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-inner'
							: 'bg-transparent'
							}`}
						style={{
							transform: isHovered ? 'translateZ(-4px)' : 'translateZ(0px)',
						}}
					/>

					<Card
						isPressable
						onPress={handleOpen}
						className={`relative rounded-lg shadow-lg overflow-hidden h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-400 transition-all duration-300 ${isHovered ? 'inset-2' : 'inset-0'
							}`}
						style={{
							width: isHovered ? 'calc(100% - 16px)' : '100%',
							height: isHovered ? 'calc(100% - 16px)' : '100%',
							margin: isHovered ? '8px' : '0px',
							backgroundImage: `url(${project.imageSrc})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							position: "relative",
							filter: isHovered ? 'grayscale(0%) saturate(1.2) brightness(1.1)' : 'grayscale(100%) brightness(0.8)',
							transform: isHovered ? 'translateZ(8px)' : 'translateZ(0px)',
						}}
					>
						<div
							className={`absolute inset-0 pointer-events-none transition-all duration-300 ${isHovered ? 'bg-black/20' : 'bg-black/50'
								}`}
							style={{ borderRadius: '8px' }}
						></div>

						<div
							aria-hidden="true"
							className="absolute inset-0 pointer-events-none"
							style={{
								overflow: "hidden",
							}}
						>
							<div
								className="absolute top-0 left-[-120%] h-full w-1/2 transform rotate-12 bg-white/30 blur-xl"
								style={{
									animation: isHovered ? "glint 2.5s ease-in-out infinite" : "none",
									mixBlendMode: "screen",
									opacity: isHovered ? 1 : 0,
									transition: "opacity 0.3s ease",
								}}
							/>
						</div>

						<CardBody className="p-6 flex flex-col items-center gap-4 relative z-10 h-full">
							<h4 className="text-xl font-bold text-center leading-tight px-2 w-full">
								<span
									className={`px-3 py-1 inline-block transition-all duration-300 ${isHovered ? 'text-white' : 'text-gray-300'
										}`}
									style={{
										textShadow: isHovered
											? "0 2px 8px rgba(0,0,0,0.6)"
											: "0 1px 4px rgba(0,0,0,0.8)"
									}}
								>
									{project.name}
								</span>
							</h4>

							<div className="flex flex-wrap gap-2 justify-center mt-auto">
								{project.developmentStack.map((tech, index) => (
									<Tooltip key={index} content={tech.title}>
										<div
											className={`p-2 shadow-sm rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered
												? 'bg-white/95 shadow-md'
												: 'bg-white/70 shadow-sm'
												}`}
											style={{
												filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
											}}
										>
											<Image
												src={tech.src}
												alt={tech.title}
												className="w-8 h-8"
												style={{ borderRadius: 0 }}
											/>
										</div>
									</Tooltip>
								))}
							</div>

							<div className="flex flex-row gap-3 justify-center">
								<GithubStarsComponent repoUrl={project.githubLink} />
								{project.demoLink && (
									<HuggingFaceComponent demoLink={project.demoLink} />
								)}
							</div>
						</CardBody>
					</Card>
				</div>

				{/* cursor flare */}
				<div
					ref={flareRef as any}
					className="pointer-events-none absolute rounded-full mix-blend-screen will-change-transform"
					style={{
						width: "200px",
						height: "200px",
						background:
							"radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 70%)",
						filter: "blur(2px)",
						transform: "translate(-50%, -50%)",
						opacity: 0,
						transition: "opacity 0.3s ease",
						zIndex: 20,
						top: 0,
						left: 0,
						borderRadius: "50%",
					}}
				></div>
			</div>

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
								<div className="flex flex-row gap-5 space-x-2">
									<GithubStarsComponent repoUrl={project.githubLink} />
									{project.demoLink && (
										<HuggingFaceComponent demoLink={project.demoLink} />
									)}
								</div>
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

			<style>{`
				@keyframes glint {
					0% {
						left: -120%;
					}
					100% {
						left: 120%;
					}
				}
			`}</style>
		</>
	);
}

export default Project;
