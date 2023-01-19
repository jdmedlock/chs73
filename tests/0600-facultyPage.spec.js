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

  test('0600:01-should display the faculty page', async () => {
    await page.goto('http://localhost:3000')
    const facultyMenuItem = await page.getByRole('link', { name: 'faculty' })
    await expect(facultyMenuItem).toBeDefined()
    await facultyMenuItem.click()
    const facultyPageHeading = await page.locator('h2:has-text("Faculty and Staff")')
    await expect(facultyPageHeading).toBeDefined()
  }, 60000)
})