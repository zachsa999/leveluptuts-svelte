import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';


const config = {

	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), sveltePreprocess()],
	kit: {
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: '200.html',
		// 	precompress: false
		// })
		//added below

		adapter: adapter(),
		// prerender: {
		// 	// concurrency: 1,
		// 	// crawl: true,
		// 	default: true,
		// 	// enabled: true,
		// 	// entries: ['*'],
		// 	// onError: 'fail'
		// },
		// trailingSlash: 'always',
	},

};

export default config;
