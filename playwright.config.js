/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	fullyParallel: true,
	testDir: "./tests",
	timeout: 1 * 60 * 1000,
	workers: 4, 
	webServer: {
		command: 'npm run dev',
		port: 3000,
		reuseExistingServer: true,
	}, 
	use: {
    //headless: false,
    //viewport: { width: 1280, height: 720 },
    //ignoreHTTPSErrors: true,
    //video: 'on-first-retry',
		trace: 'retain-on-failure',
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
