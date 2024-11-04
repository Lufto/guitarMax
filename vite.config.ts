import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	build: {
		outDir: 'dist',
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/assets/style/variables.module.scss";
				@import "./src/App/App.module.scss";
				`,
			},
		},
	},
});
