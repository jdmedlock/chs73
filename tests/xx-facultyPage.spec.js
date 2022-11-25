import { afterAll, beforeAll, describe, test } from 'vitest'
import { preview } from 'vite'
import { chromium } from 'playwright'
import { expect } from '@playwright/test'

describe('Test basic page navigation', async () => {
  let server
  let browser
  let page

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } })
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
    await new Promise((resolve, reject) => {
      server.httpServer.close(error => error ? reject(error) : resolve())
    })
  })

  test('should display the faculty page', async () => {
    await page.goto('http://localhost:3000')
    const facultyMenuItem = await page.getByRole('link', { name: 'faculty' })
    await expect(facultyMenuItem).toBeDefined()
    await facultyMenuItem.click()
    const facultyPageHeading = await page.locator('h1')
    await expect(facultyPageHeading).toBeDefined()
    await expect(facultyPageHeading).toHaveText('Faculty & Staff of 1973')
  }, 60000)
})