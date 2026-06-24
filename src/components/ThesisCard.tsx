import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "@heroui/modal";
import { Link } from "@heroui/link";
import {
	FaGithub,
	FaFilePdf,
	FaUniversity,
	FaCalendarAlt,
	FaClock,
	FaFileAlt,
	FaBookOpen,
	FaLock,
} from "react-icons/fa";

export type PublicationType =
	| "bachelor"
	| "master"
	| "paper"
	| "report"
	| "bridging"
	| "document";

interface Publication {
	id: string;
	title: string;
	subtitle: string;
	description: string[];
	type: PublicationType;
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

function ThesisCard({ thesis }: { thesis: Publication }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const getPublicationMeta = (type: PublicationType) => {
		switch (type) {
			case "master":
				return {
					label: "Master Thesis",
					colorClass: "text-red-600",
					dotColor: "bg-red-500",
					bgTint: "bg-red-50",
					sideBg: "bg-red-50",
					borderAccent: "border-red-200"
				};
			case "bachelor":
				return {
					label: "Bachelor Thesis",
					colorClass: "text-emerald-600",
					dotColor: "bg-emerald-500",
					bgTint: "bg-emerald-50",
					sideBg: "bg-emerald-50",
					borderAccent: "border-emerald-200"
				};
			case "bridging":
				return {
					label: "Bridging Program",
					colorClass: "text-amber-600",
					dotColor: "bg-amber-500",
					bgTint: "bg-amber-50",
					sideBg: "bg-amber-50",
					borderAccent: "border-amber-200"
				};
			case "paper":
				return {
					label: "Research Paper",
					colorClass: "text-emerald-600",
					dotColor: "bg-emerald-500",
					bgTint: "bg-emerald-50",
					sideBg: "bg-emerald-50",
					borderAccent: "border-emerald-200"
				};
			case "report":
				return {
					label: "Project Report",
					colorClass: "text-amber-600",
					dotColor: "bg-amber-500",
					bgTint: "bg-amber-50",
					sideBg: "bg-amber-50",
					borderAccent: "border-amber-200"
				};
			default:
				return {
					label: "Publication",
					colorClass: "text-zinc-600",
					dotColor: "bg-zinc-400",
					bgTint: "bg-zinc-50",
					sideBg: "bg-zinc-50",
					borderAccent: "border-zinc-200"
				};
		}
	};

	const meta = getPublicationMeta(thesis.type);

	const readingTime = thesis.pageCount
		? Math.ceil(thesis.pageCount * 3)
		: null;

	const backgroundClass = "bg-white/90 backdrop-blur-xl dark:bg-[#0a0a0a]";
	const borderClass = "border border-zinc-200 dark:border-white/10";
	const textPrimary = "text-zinc-900 dark:text-white";
	const textSecondary = "text-zinc-600 dark:text-zinc-400";
	const textMuted = "text-zinc-400 dark:text-zinc-600";

	// Locked / coming-soon card for hidden theses
	if (thesis.hidden) {
		return (
			<div className="w-full">
				<Card
					className={`bg-white/60 dark:bg-[#0a0a0a]/60 border border-zinc-200 dark:border-white/10 ${meta.borderAccent} border-l-4 rounded-2xl overflow-hidden w-full shadow-sm opacity-60 cursor-not-allowed select-none`}
				>
					<CardBody className="p-0">
						<div className="flex flex-col md:flex-row items-stretch w-full min-h-[120px]">
							<div className={`w-full md:w-[180px] p-6 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-zinc-100 dark:border-white/5 ${meta.sideBg} dark:bg-white/[0.02]`}>
								<div className="flex items-center gap-2 mb-2">
									<div className={`w-2 h-2 rounded-full ${meta.dotColor} shadow-sm`}></div>
									<span className={`text-[10px] font-black uppercase tracking-[0.2em] ${meta.colorClass}`}>
										{meta.label}
									</span>
								</div>
								<span className={`text-[11px] font-bold ${textMuted} uppercase tracking-widest`}>
									In Progress
								</span>
							</div>

							<div className="flex-1 p-8 py-6 flex flex-col justify-center bg-white/40 dark:bg-transparent">
								<h3 className={`text-xl font-black ${textPrimary} leading-tight mb-2`}>
									{thesis.title}
								</h3>
								<p className={`text-sm ${textSecondary} leading-relaxed opacity-80`}>
									{thesis.subtitle}
								</p>
							</div>

							<div className="p-8 py-6 flex items-center justify-center gap-8 border-t md:border-t-0 md:border-l border-zinc-100 dark:border-white/5 bg-zinc-50/30 dark:bg-white/[0.01]">
								<div className={`flex items-center gap-2 text-zinc-400 dark:text-zinc-600 font-black text-[10px] uppercase tracking-[0.2em] bg-zinc-100 dark:bg-white/5 px-8 py-4 rounded-full border border-zinc-200 dark:border-white/5`}>
									<span className="leading-none pb-[1px]">Locked</span>
									<FaLock className="text-sm" />
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		);
	}

	return (
		<>
			<div className="w-full group">
				<Card
					isPressable
					onPress={handleOpen}
					className={`${backgroundClass} ${borderClass} ${meta.borderAccent} border-l-4 rounded-2xl overflow-hidden hover:bg-white dark:hover:bg-[#121212] transition-all duration-400 w-full shadow-sm hover:shadow-xl`}
				>
					<CardBody className="p-0">
						<div className={`flex flex-col md:flex-row items-stretch w-full min-h-[120px]`}>
							<div className={`w-full md:w-[180px] p-6 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-zinc-100 dark:border-white/5 ${meta.sideBg} dark:bg-white/[0.02]`}>
								<div className="flex items-center gap-2 mb-2">
									<div className={`w-2 h-2 rounded-full ${meta.dotColor} shadow-sm`}></div>
									<span className={`text-[10px] font-black uppercase tracking-[0.2em] ${meta.colorClass}`}>
										{meta.label}
									</span>
								</div>
								<span className={`text-[11px] font-bold ${textMuted} uppercase tracking-widest`}>
									{thesis.date}
								</span>
							</div>

							<div className="flex-1 p-8 py-6 flex flex-col justify-center bg-white/40 dark:bg-transparent">
								<h3 className={`text-xl font-black ${textPrimary} leading-tight mb-2 group-hover:text-primary-500 transition-colors`}>
									{thesis.title}
								</h3>
								<p className={`text-sm ${textSecondary} leading-relaxed line-clamp-1 opacity-80 group-hover:opacity-100 transition-opacity`}>
									{thesis.subtitle}
								</p>
							</div>

							<div className="p-8 py-6 flex items-center justify-center gap-8 border-t md:border-t-0 md:border-l border-zinc-100 dark:border-white/5 bg-zinc-50/30 dark:bg-white/[0.01]">
								<div className="hidden lg:flex flex-col items-end">
									<span className={`text-[10px] font-black uppercase tracking-widest ${textMuted} mb-1`}>Pagination</span>
									<span className={`text-xs font-bold ${textSecondary}`}>{thesis.pageCount || "N/A"} pp.</span>
								</div>
								<div className={`flex items-center gap-2 ${textPrimary} font-black text-[10px] uppercase tracking-[0.2em] bg-zinc-100 dark:bg-white/10 px-8 py-4 rounded-full border border-zinc-200 dark:border-white/5 shadow-sm group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-600 transition-all active:scale-95`}>
									<span className="leading-none pb-[1px]">View</span>
									<FaBookOpen className="text-sm" />
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>

			<Modal
				isOpen={isOpen}
				onClose={handleClose}
				backdrop="blur"
				size="3xl"
				scrollBehavior="inside"
				className="bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 m-4"
			>
				<ModalContent className="bg-slate-50 dark:bg-zinc-950">
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 p-6 md:p-10 pb-4 border-b border-zinc-200/50 dark:border-white/5">
								<div className="flex items-center gap-3 mb-3">
									<div className={`px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[9px] font-black uppercase tracking-[0.3em] ${meta.colorClass}`}>
										{meta.label}
									</div>
									<div className={`text-[9px] font-black uppercase tracking-[0.3em] ${textMuted}`}>
										{thesis.date}
									</div>
								</div>
								<h2 className={`text-2xl md:text-4xl font-black leading-tight ${textPrimary}`}>
									{thesis.title}
								</h2>
								<p className={`text-base md:text-lg font-medium italic mt-3 leading-relaxed ${textSecondary}`}>
									{thesis.subtitle}
								</p>
							</ModalHeader>

							<ModalBody className="px-6 md:px-10 py-6 md:py-10 gap-8 md:gap-12">

								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white dark:bg-white/[0.02] p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-white/5 shadow-sm">
									<div className="flex flex-col items-center text-center">
										<FaUniversity className="text-zinc-300 dark:text-zinc-600 mb-2 md:mb-3 text-lg opacity-60" />
										<span className="text-[9px] uppercase font-black text-zinc-400 tracking-widest mb-1">Institution</span>
										<span className={`text-xs md:text-sm font-bold ${textPrimary}`}>{thesis.institution}</span>
									</div>
									<div className="flex flex-col items-center text-center border-l border-zinc-100 dark:border-white/5">
										<FaCalendarAlt className="text-zinc-300 dark:text-zinc-600 mb-2 md:mb-3 text-lg opacity-60" />
										<span className="text-[9px] uppercase font-black text-zinc-400 tracking-widest mb-1">Submission</span>
										<span className={`text-xs md:text-sm font-bold ${textPrimary}`}>{thesis.date}</span>
									</div>
									<div className="flex flex-col items-center text-center border-l border-zinc-100 dark:border-white/5">
										<FaFileAlt className="text-zinc-300 dark:text-zinc-600 mb-2 md:mb-3 text-lg opacity-60" />
										<span className="text-[9px] uppercase font-black text-zinc-400 tracking-widest mb-1">Pagination</span>
										<span className={`text-xs md:text-sm font-bold ${textPrimary}`}>{thesis.pageCount || "N/A"} pp.</span>
									</div>
									<div className="flex flex-col items-center text-center border-l border-zinc-100 dark:border-white/5">
										<FaClock className="text-zinc-300 dark:text-zinc-600 mb-2 md:mb-3 text-lg opacity-60" />
										<span className="text-[9px] uppercase font-black text-zinc-400 tracking-widest mb-1">Focus Time</span>
										<span className={`text-xs md:text-sm font-bold ${textPrimary}`}>~{readingTime || "15"} min</span>
									</div>
								</div>


								<div className="space-y-4 md:space-y-6">
									<div className="flex items-center gap-3 opacity-60">
										<div className="w-1 h-5 bg-primary-500 rounded-full"></div>
										<h4 className="text-[10px] font-black uppercase text-zinc-500 dark:text-zinc-300 tracking-[0.2em]">Executive Abstract</h4>
									</div>
									<p className={`text-lg md:text-xl leading-relaxed ${textPrimary} font-semibold italic`}>
										"{thesis.abstract}"
									</p>
								</div>


								<div className={`flex flex-col gap-6 md:gap-8 ${textPrimary} opacity-90 text-base md:text-lg leading-relaxed`}>
									{thesis.description.map((p, i) => (
										<p key={i}>{p}</p>
									))}
								</div>


								<div className="flex flex-col items-center gap-6 pt-10 border-t border-zinc-200/50 dark:border-white/5">
									<span className="text-[9px] uppercase font-black text-zinc-400 tracking-[0.6em] opacity-40">Advisory Committee</span>
									<div className="flex flex-wrap justify-center gap-3 mt-4">
										{thesis.supervisors.map((s, i) => (
											<div key={i} className="px-6 py-3 rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/[0.01] text-[10px] font-black text-zinc-500">
												{s}
											</div>
										))}
									</div>
								</div>
							</ModalBody>

							<ModalFooter className="p-6 md:p-10 pt-6 border-t border-zinc-200/50 dark:border-white/5 bg-zinc-100/30 dark:bg-black/40">
								<div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-6">
									<div className="flex flex-col sm:flex-row gap-3">
										<Link href={thesis.pdfUrl} isExternal className="w-full sm:w-auto">
											<Button
												color="primary"
												size="md"
												className="w-full sm:w-auto font-black px-8 text-[10px] uppercase tracking-widest shadow-lg shadow-primary-500/10"
												startContent={<FaFilePdf className="text-base" />}
											>
												Open Publication
											</Button>
										</Link>
										<Link href={thesis.githubLink} isExternal className="w-full sm:w-auto">
											<Button
												variant="flat"
												size="md"
												className="w-full sm:w-auto font-black px-8 text-[10px] uppercase tracking-widest bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
												startContent={<FaGithub className="text-base" />}
											>
												Repository
											</Button>
										</Link>
									</div>
									<Button
										variant="light"
										onPress={onClose}
										className="font-black text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-[0.4em] text-[10px] transition-colors"
									>
										Go back
									</Button>
								</div>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

export default ThesisCard;
