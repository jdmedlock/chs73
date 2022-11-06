import { afterAll, beforeAll, describe, test } from 'vitest'
import { preview } from 'vite'
import { chromium } from 'playwright'
import { expect } from '@playwright/test'

describe('basic', async () => {
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

  test('should have the correct title', async () => {
    await page.goto('http://localhost:3000')
    const title = page.locator('h1')
    await expect(title).toBeDefined()
    await expect(title).toHaveText('Cape Central High - Class of 1973')
  }, 60000)

  test('should display the events page', async () => {
    await page.goto('http://localhost:3000')
    const eventsMenuItem = page.getByText('events')
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    const eventsPageHeading = page.locator('h2')
    await expect(eventsPageHeading).toBeDefined()
    await expect(eventsPageHeading).toHaveText('Upcoming Events')
  }, 60000)
})