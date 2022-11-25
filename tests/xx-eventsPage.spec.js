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

  test('should display the events page', async () => {
    await page.goto('http://localhost:3000')
    const eventsMenuItem = await page.locator('a').filter({ hasText: 'events' })
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    const eventsPageHeading = await page.locator('h2')
    await expect(eventsPageHeading).toBeDefined()
    await expect(eventsPageHeading).toHaveText('Upcoming Events')
  }, 60000)
})