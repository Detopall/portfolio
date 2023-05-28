import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpeg|png|svg)$/.test(name ?? "")) {
						return "assets/images/[name][extname]";
					}

					if (/\.css$/.test(name ?? "")) {
						return "assets/css/[name][extname]";
					}

					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return "assets/[name][extname]";
				},
			},
		},
	},
});
