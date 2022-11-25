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

  test('should display the contact page', async () => {
    await page.goto('http://localhost:3000')
    const contactMenuItem = await page.locator('a').filter({ hasText: 'contact' })
    await expect(contactMenuItem).toBeDefined()
    await contactMenuItem.click()
    const contactPageHeading = page.locator('h2').filter({ hasText: 'Get involved!' })
    await expect(contactPageHeading).toBeDefined()
  }, 60000)
})