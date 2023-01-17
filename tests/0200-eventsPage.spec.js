import { chromium } from 'playwright'
import { test, expect } from '@playwright/test'

test.describe('Test basic page navigation', async () => {
  let browser
  let page

  test.beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  test.afterAll(async () => {
    await browser.close()
  })

  test('0200:01-should display the events page', async () => {
    await page.goto('http://localhost:3000')
    const eventsMenuItem = await page.locator('a').filter({ hasText: 'events' })
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    const eventsPageHeading = await page.locator('heading:has-text("Upcoming Events")')
    await expect(eventsPageHeading).toBeDefined()
  }, 60000)
})