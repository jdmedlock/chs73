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
  
  //--------------------------------------------------------------------------
  // Tests
  //--------------------------------------------------------------------------

  test('0500:01-should display the memoriam page', async () => {
    await page.goto('http://localhost:3000')
    const memoriamMenuItem = await page.locator('a').filter({ hasText: 'memoriam' })
    await expect(memoriamMenuItem).toBeDefined()
    await memoriamMenuItem.click()
    const memoriamPageHeading = await page.locator('heading:has-text("In Memoriam")')
    await expect(memoriamPageHeading).toBeDefined()
  }, 60000)
})