import { chromium } from 'playwright'
import { test, expect } from '@playwright/test'

test.describe('Test credit card processing', async () => {
  let browser
  let page

  test.beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  test.afterAll(async () => {
    await browser.close()
  })

  test('should signup for Saturday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))

    // Go to the events page
    await page.goto('http://localhost:3000')
    const eventsMenuItem = page.locator('a:has-text("events")')
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    await page.waitForSelector('text="Upcoming Events"')

    // Signup for the Saturday event
    const saturdaySignupLink = await page.locator('a:has-text("Sign me up!!!")')
    await expect(saturdaySignupLink).toBeDefined()
    await saturdaySignupLink.click()
    await page.waitForSelector('text="Signup for Saturday"')

    // Proceed to the checkout
    const checkoutLink = await page.locator('a:has-text("Proceed to checkout")')
    await expect(checkoutLink).toBeDefined()
    await checkoutLink.click()
    await page.waitForSelector('text="Checkout"')

    // Select no. attendees
    const noAttendeesBtn = await page.locator('button:has-text("No. Attendees")')
    await noAttendeesBtn.click()
    const oneAttendeesLink = await page.locator('a:has-text("1")')
    await expect(oneAttendeesLink).toBeDefined()
    await oneAttendeesLink.click()

    // Fill in the badge names
    await page.waitForSelector('text="Your name badge:"')
    const badgeNameLabel = await page.locator('label:has-text("Your name badge:")')
    await expect(badgeNameLabel).toBeDefined()
    await page.getByPlaceholder('First name').fill('Jim')
    await page.getByPlaceholder('Last name').fill('Tester')

    // Check option to help classmate
    await page.getByLabel("Click here if you'd like to help a classmate who might otherwise not be able to attend. You will be billed for one additional admittance.").check()

    // Pay for the event
    await page.getByRole('button', { name: 'Calculate & pay' }).click()
    await page.getByRole('link', { name: 'Debit or Credit Card' }).click()
    await page.getByLabel('Card number').fill('4005519200000004')

  }, 2 * 60 * 1000)

})