import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { coverageConfigDefaults, defineConfig } from 'vite-plus';
import { playwright } from 'vite-plus/test/browser-playwright';

const ignore_patterns = [
	'**/.svelte-kit/**',
	'**/build/**',
	'**/coverage/**',
	'**/dist/**',
	'**/playwright-report/**',
	'**/test-results/**',
];

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [
				vitePreprocess(),
				mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
			],
			extensions: ['.svelte', '.md'],
			adapter: adapter(),
		}),
		tailwindcss(),
	],
	fmt: {
		useTabs: true,
		singleQuote: true,
		printWidth: 70,
		trailingComma: 'all',
		proseWrap: 'always',
		svelte: true,
		sortTailwindcss: {
			stylesheet: './src/app.css',
		},
		ignorePatterns: [...ignore_patterns, 'pnpm-lock.yaml'],
	},
	lint: {
		// shadcn-svelte generated; tsgolint can't resolve `<script module>` exports
		ignorePatterns: [...ignore_patterns, 'src/lib/components/ui/**'],
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				// Client-side tests (Svelte components)
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						ui: false,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }],
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
				},
			},
			{
				// Server-side tests (Node.js utilities)
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
				},
			},
		],
		coverage: {
			reporter: ['text-summary', 'html'],
			provider: 'v8',
			include: ['src/**/*.{js,ts,svelte}'],
			exclude: [
				...coverageConfigDefaults.exclude,
				'src/lib/components/ui/**',
				'**/+page.svelte',
				'**/+layout.svelte',
				'**/+error.svelte',
			],
		},
	},
});
