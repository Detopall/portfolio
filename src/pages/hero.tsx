import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { Image } from "@heroui/image";

function hero() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
				<div className="flex flex-col md:flex-row max-w-4xl w-full items-center justify-center">
					<div className="flex flex-col items-center justify-center space-y-4 text-center md:text-left md:w-1/2">
						<h1 className={title({ size: "lg" })}>Denis Topallaj</h1>
						<span
							className={title({
								size: "sm",
								color: "green",
								fullWidth: true,
								underline: true,
							})}
						>
							Data Scientist
						</span>
					</div>
					<div className="flex items-center justify-center md:w-1/2 mt-6 md:mt-0">
						<Image
							src="/assets/denis-topallaj.png"
							alt="Denis Topallaj"
							className="rounded-xl aspect-square object-cover w-full max-w-[250px] md:max-w-[350px]"
						/>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}

export default hero;
