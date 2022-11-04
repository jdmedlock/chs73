import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit()
	],
	server: {
		port: process.env.PORT || 3000
	},
	test: {
    globals: true,
    environment: 'jsdom',
  },
}

export default config
