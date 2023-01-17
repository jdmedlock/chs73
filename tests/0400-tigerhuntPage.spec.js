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

  test('0400:01-should display the tigerhunt page', async () => {
    await page.goto('http://localhost:3000')
    const tigerhuntMenuItem = await page.locator('a').filter({ hasText: 'tiger hunt' })
    await expect(tigerhuntMenuItem).toBeDefined()
    await tigerhuntMenuItem.click()
    const tigerhuntPageHeading = await page.locator('heading:has-text("Tiger Hunt!")')
    await expect(tigerhuntPageHeading).toBeDefined()
  }, 60000)
})