import { chromium } from 'playwright'
import { test, expect } from '@playwright/test'

test.describe('Test credit card processing', async () => {
  let browser
  let page

  test.beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  test.afterAll(async () => {
    await browser.close()
  })

  test('should signup for Saturday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))

    // Go to the events page
    await page.goto('http://localhost:3000')
    const eventsMenuItem = page.locator('a:has-text("events")')
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    await page.waitForSelector('text="Upcoming Events"')
    console.log('Events page URL: ', page.url())

    // Signup for the Saturday event
    const saturdaySignupLink = await page.locator('text="Sign me up!!!"')
    await expect(saturdaySignupLink).toBeDefined()
    await saturdaySignupLink.click({ timeout: 1 * 60 * 1000 })
  }, 1 * 60 * 1000)

})