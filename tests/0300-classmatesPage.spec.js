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

  test('0300:01-should display the classmates page', async () => {
    await page.goto('http://localhost:3000')
    const classmatesMenuItem = await page.locator('a').filter({ hasText: 'classmates' })
    await expect(classmatesMenuItem).toBeDefined()
    await classmatesMenuItem.click()
    const classmatesPageHeading = await page.locator('heading:has-text("Class of 1973")')
    await expect(classmatesPageHeading).toBeDefined()
  }, 60000)
})