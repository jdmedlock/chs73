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

  test('should display the contact page', async () => {
    await page.goto('http://localhost:3000')
    const contactMenuItem = await page.locator('a').filter({ hasText: 'contact' })
    await expect(contactMenuItem).toBeDefined()
    await contactMenuItem.click()
    const contactPageHeading = page.locator('h2').filter({ hasText: 'Get involved!' })
    await expect(contactPageHeading).toBeDefined()
  }, 60000)
})