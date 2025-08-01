import { defineConfig } from 'vite';

export default defineConfig({
		build: {
			lib: {
				entry: 'src/PDFdy.js',
				name: 'PDFdy',
				fileName: (format) => `PDFdy.${format}.js`,
			},
		}
});
