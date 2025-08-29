import { useTheme } from "@/hooks/use-theme";

import Hero from "@/pages/hero";
import Experience from "@/pages/experience";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import { Switch } from "@heroui/switch";

import { MoonIcon, SunIcon } from "@/components/moonSunIcons";

function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<main className={`green-${theme} text-foreground bg-background w-full overflow-x-hidden`}>
				<div className="flex flex-col items-end py-4">
					<Switch
						defaultSelected
						endContent={<MoonIcon />}
						startContent={<SunIcon />}
						onChange={toggleTheme}
						size="lg"
					/>
				</div>
				<Hero />
				<Experience />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
