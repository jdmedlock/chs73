import { afterAll, beforeAll, describe, test } from 'vitest'
import { preview } from 'vite'
import { chromium } from 'playwright'
import { expect } from '@playwright/test'

describe('Test credit card processing', async () => {
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

  test('should signup for Saturday gathering', async () => {
    await page.goto('http://localhost:3000')
    const eventsMenuItem = page.locator('a').filter({ hasText: 'events' })
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()

    const eventsPageHeading = page.locator('h2')
    await expect(eventsPageHeading).toBeDefined()
    await expect(eventsPageHeading).toHaveText('Upcoming Events')

    const signupButton = page.locator('a').filter({ hasText: 'Sign me up!!!' })
    await expect(signupButton).toBeDefined()
    await signupButton.click()

    const signupPageHeading = page.locator('h2')
    await expect(signupPageHeading).toBeDefined()
    await expect(signupPageHeading).toHaveText('SIGNUP FOR SATURDAY')

  }, 60000)

})