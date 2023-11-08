import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser',
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		rollupOptions: {
			external: ['@aws-sdk/client-dynamodb']
		}
	}
});
