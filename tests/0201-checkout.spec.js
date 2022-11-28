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

    // Pay for the event. Note that PayPal adds an iframe containing the
    // payment buttons and then a second, nested iframe within it containing
    // the card form.
    await page.getByRole('button', { name: 'Calculate & pay' }).click()
    const paypalFrame = await page.frameLocator('.component-frame')
    await paypalFrame.locator('span:has-text("Debit or Credit Card")').click()
    const cardFormFrame = await paypalFrame.frameLocator('[title=paypal_card_form]')
    await cardFormFrame.locator('#credit-card-number').click()
    await cardFormFrame.locator('#credit-card-number').fill('4005519200000004')
    await cardFormFrame.locator('#expiry-date').click()
    await cardFormFrame.locator('#expiry-date').fill('0523')
    await cardFormFrame.locator('#credit-card-security').click()
    await cardFormFrame.locator('#credit-card-security').fill('523')
    await cardFormFrame.locator('[autocomplete=cc-given-name]').click()
    await cardFormFrame.locator('[autocomplete=cc-given-name]').fill('Jim')
    await cardFormFrame.locator('[autocomplete=cc-family-name]').click()
    await cardFormFrame.locator('[autocomplete=cc-family-name]').fill('Tester')
    await cardFormFrame.locator('[autocomplete="billing street-address"]').click()
    await cardFormFrame.locator('[autocomplete="billing street-address"]').fill('1245 Main Street')
    await cardFormFrame.locator('[autocomplete="billing street-address2"]').click()
    await cardFormFrame.locator('[autocomplete="billing street-address2"]').fill('Apt. 34')
    await cardFormFrame.locator('[autocomplete="billing address-level2"]').click()
    await cardFormFrame.locator('[autocomplete="billing address-level2"]').fill('Cape Girardeau')
    await cardFormFrame.locator('[name=state]').click()
    await cardFormFrame.locator('[name=state]').selectOption('MO')
    await cardFormFrame.locator('[autocomplete=tel]').click()
    await cardFormFrame.locator('[autocomplete=tel]').fill('63701')
    await cardFormFrame.locator('[autocomplete=email]').click()
    await cardFormFrame.locator('[autocomplete=email]').fill('jdmedlock-chs73@gmail.com')
    await cardFormFrame.locator('#submit-button').click()

  }, 2 * 60 * 1000)

})