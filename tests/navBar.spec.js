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

  test('should have the correct title', async () => {
    await page.goto('http://localhost:3000')
    const title = page.locator('h1')
    await expect(title).toBeDefined()
    await expect(title).toHaveText('Cape Central High - Class of 1973')
  }, 60000)

  test('should display the events page', async () => {
    await page.goto('http://localhost:3000')
    const eventsMenuItem = page.locator('a').filter({ hasText: 'events' })
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    const eventsPageHeading = page.locator('h2')
    await expect(eventsPageHeading).toBeDefined()
    await expect(eventsPageHeading).toHaveText('Upcoming Events')
  }, 60000)

  test('should display the classmates page', async () => {
    await page.goto('http://localhost:3000')
    const classmatesMenuItem = page.locator('a').filter({ hasText: 'classmates' })
    await expect(classmatesMenuItem).toBeDefined()
    await classmatesMenuItem.click()
    const classmatesPageHeading = page.locator('h1')
    await expect(classmatesPageHeading).toBeDefined()
    await expect(classmatesPageHeading).toHaveText('Class of 1973')
  }, 60000)

  test('should display the tigerhunt page', async () => {
    await page.goto('http://localhost:3000')
    const tigerhuntMenuItem = page.locator('a').filter({ hasText: 'tiger hunt' })
    await expect(tigerhuntMenuItem).toBeDefined()
    await tigerhuntMenuItem.click()
    const tigerhuntPageHeading = page.locator('h1')
    await expect(tigerhuntPageHeading).toBeDefined()
    await expect(tigerhuntPageHeading).toHaveText('Tiger Hunt!')
  }, 60000)

  test('should display the memoriam page', async () => {
    await page.goto('http://localhost:3000')
    const memoriamMenuItem = page.locator('a').filter({ hasText: 'memoriam' })
    await expect(memoriamMenuItem).toBeDefined()
    await memoriamMenuItem.click()
    const memoriamPageHeading = page.locator('h1')
    await expect(memoriamPageHeading).toBeDefined()
    await expect(memoriamPageHeading).toHaveText('In Memoriam')
  }, 60000)

  test('should display the faculty page', async () => {
    await page.goto('http://localhost:3000')
    const memoriamMenuItem = page.locator('a').filter({ hasText: 'faculty' })
    await expect(memoriamMenuItem).toBeDefined()
    await memoriamMenuItem.click()
    const memoriamPageHeading = page.locator('h1')
    await expect(memoriamPageHeading).toBeDefined()
    await expect(memoriamPageHeading).toHaveText('Faculty and Staff')
  }, 60000)
})