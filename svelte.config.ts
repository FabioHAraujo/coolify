import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { type SvelteConfig } from "@sveltejs/vite-plugin-svelte";

const config: SvelteConfig = {
	preprocess: vitePreprocess({ script: true }),
	compilerOptions: {
		// TODO: Enforce runes mode on all files once https://github.com/inertiajs/inertia v3.x is released
		// runes: true,
		discloseVersion: false,
		modernAst: true,
	},
	vitePlugin: {
		inspector: {
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right'
		}
	}
};

export default config;
