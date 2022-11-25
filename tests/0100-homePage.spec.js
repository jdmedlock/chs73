import { chromium } from 'playwright'
import { test, expect } from '@playwright/test'

test.describe('Test basic page navigation', async () => {
  let browser
  let page

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage()
  })

  test.afterAll(async () => {
    await browser.close()
  })

  test('should have the correct title', async () => {
    await page.goto('http://localhost:3000')
    const title = await page.locator('heading:has-text("Cape Central High - Class of 1973")')
    await expect(title).toBeDefined()
  }, 60000)
})