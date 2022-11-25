/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	fullyParallel: false,
	timeout: 5 * 60 * 1000,
	webServer: {
		command: 'npm run dev',
		port: 3000
	}, 
	projects: [
		{
			name: 'Desktop Chromium',
			testMatch: /.*.spec.js/,
			use: {
				browserName: 'chromium',
				viewport: { width: 1280, height: 720 },
			},
		},
	],
}

export default config;
