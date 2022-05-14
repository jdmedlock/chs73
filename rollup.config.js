import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url'
import svelte from 'rollup-plugin-svelte'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'
import sveltePreprocess from 'svelte-preprocess'
import json from '@rollup/plugin-json';
import dotenv from 'dotenv'

dotenv.config()

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning)

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode),
					'process.env.BE_URL': JSON.stringify(process.env.BE_URL),
					'process.env.CLOUDINARY_URL': JSON.stringify(process.env.CLOUDINARY_URL),
					'process.env.CLOUDINARY_NAME': JSON.stringify(process.env.CLOUDINARY_NAME),
					'process.env.AIRTABLE_API_KEY': JSON.stringify(process.env.AIRTABLE_API_KEY),
					'process.env.AIRTABLE_BASE': JSON.stringify(process.env.AIRTABLE_BASE),
				},
			}),
			svelte({
				emitCss: true,
				preprocess: sveltePreprocess({ 
					postcss: true,
				}),
				compilerOptions: {
					dev,
					hydratable: true
				}
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			json(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				preventAssignment: true,
				values:{
					'process.browser': false,
					'process.env.NODE_ENV': JSON.stringify(mode),
					'process.env.BE_URL': JSON.stringify(process.env.BE_URL),
					'process.env.CLOUDINARY_URL': JSON.stringify(process.env.CLOUDINARY_URL),
					'process.env.CLOUDINARY_NAME': JSON.stringify(process.env.CLOUDINARY_NAME),
				},
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true,
				},
				emitCss: false,
				preprocess: sveltePreprocess({
					postcss: true,
				}),
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			json(),
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn,
	}
}
