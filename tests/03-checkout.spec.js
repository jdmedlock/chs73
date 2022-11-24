import { afterAll, beforeAll, describe, test } from 'vitest'
import { preview } from 'vite'
import { expect, chromium } from '@playwright/test'

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
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))

    await page.goto('http://localhost:3000')
    console.log('Home page URL: ', page.url())
    const eventsMenuItem = page.locator('a').filter({ hasText: 'events' })
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    await page.waitForSelector('text=Upcoming Events')
    console.log('Events page URL: ', page.url())

    //const saturdaySignupLink = await page.getByText('Sign me up!!!')
    const saturdaySignupLink = await page.locator('text=Sign me up!!!')
    await saturdaySignupLink.waitFor({ state: "visible"})
    await saturdaySignupLink.click() 


/*
    const eventsPageHeading = await page.locator('h2')
    await expect(eventsPageHeading).toBeDefined()
    await expect(eventsPageHeading).toHaveText('Upcoming Events')

    const saturdaySignupLink = await page.getByText('Sign me up!!!')
    console.log('saturdaySignupLink: ', saturdaySignupLink)

    await page.click('a[href="signup?back=events"]')
*/
  }, 120000)

})