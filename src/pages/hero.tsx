import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { Image } from "@heroui/image";

function hero() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="flex flex-row max-w-lg text-center justify-center">
					<div className="flex flex-col items-center justify-center space-y-4">
						<h1 className={title({size: "lg"})}>Hi, I'm Denis Topallaj</h1>
						<span
							className={title({ size: "sm", color: "green", fullWidth: true, underline: true })}
						>
							Data Scientist
						</span>
					</div>
					<div className="flex items-center justify-center">
						<div>
							<Image
								isBlurred
								src="/assets/denis-topallaj.png"
								alt="Denis Topallaj"
								className="rounded-full aspect-square object-cover m-10"
								width={350}
							/>
						</div>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}

export default hero;
