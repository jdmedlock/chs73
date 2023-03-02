/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	fullyParallel: true,
	reporter: 'line',
	testDir: "./tests",
	timeout: 1 * 60 * 1000,
	workers: 1, 
	webServer: {
		command: 'npm run dev',
		port: 3000,
		reuseExistingServer: true,
	}, 
	use: {
    headless: false,
    viewport: { width: 1280, height: 1200 },
    ignoreHTTPSErrors: true,
    //video: 'on-first-retry',
		trace: 'retain-on-failure',
  },
	projects: [
		{
			name: 'Desktop Chromium',
			testMatch: /.*.spec.js/,
			use: {
				browserName: 'chromium',
				viewport: { width: 1280, height: 1200 },
			},
		},
	],
}

export default config;
