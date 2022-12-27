import { chromium } from 'playwright'
import { test, expect } from '@playwright/test'

test.describe('Test event signup', async () => {
  let browser
  let page

  test.beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  test.afterAll(async () => {
    await browser.close()
  })

  // Signup for the event and start the checkout process
  const signupAndCheckout = async () => {
    // Go to the events page
    await page.goto('http://localhost:3000')
    const eventsMenuItem = page.locator('a:has-text("events")')
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    await page.waitForSelector('text="Upcoming Events"')

    // Signup for the Saturday event
    const fridaySignupLink = await page.locator('[id=FridaySignupLink]')
    await expect(fridaySignupLink).toBeDefined()
    await fridaySignupLink.click()
    await page.waitForSelector('text="Signup for Friday"')

    // Proceed to the checkout
    const checkoutLink = await page.locator('a:has-text("Proceed to checkout")')
    await expect(checkoutLink).toBeDefined()
    await checkoutLink.click()
    await page.waitForSelector('text="Checkout"')
  }

  const selectNoAttendees = async (noAttendees, email, badgeNames, willHelpClassmate) => {
    // Select no. attendees
    const noAttendeesBtn = await page.locator('button:has-text("No. Attendees")')
    await noAttendeesBtn.click()
    const oneAttendeesLink = await page.locator(`a:has-text("${ noAttendees }")`)
    await expect(oneAttendeesLink).toBeDefined()
    await oneAttendeesLink.click()

    // Fill in the email & badge information
    console.log('got here #1')
    await page.waitForSelector('text="Your name badge:"')
    const emailLabel = await page.locator('label:has-text("Your email:")')
    console.log('got here #2')
    await expect(emailLabel).toBeDefined()
    console.log('got here #3')
    await page.getByPlaceholder('Your email').fill(`${ email }`)
    console.log('got here #4')

    const badgeNameLabel = await page.locator('label:has-text("Your name badge:")')
    await expect(badgeNameLabel).toBeDefined()
    await page.getByPlaceholder('Your first name').fill(`${ badgeNames.classmate.firstName }`)
    await page.getByPlaceholder('Your last name').fill(`${ badgeNames.classmate.lastName }`)
    if (noAttendees === '2') {
      await page.getByPlaceholder('Companion first name').fill(`${ badgeNames.companion.firstName }`)
      await page.getByPlaceholder('Companion last name').fill(`${ badgeNames.companion.lastName }`)
    }

    // Check option to help classmate
    if (willHelpClassmate) {
      await page.getByLabel("Click here if you'd like to help a classmate who might otherwise not be able to attend. You will be billed for one additional admittance.").check()
    }
  }

  // Validate the payment receipt
  const validateReceipt = async (receiptAmount) => {
    await page.waitForSelector('[id=paymentReceipt]')
    await expect(page.locator('#receiptOrderId')).not.toHaveText('')
    await expect(page.locator('#receiptAmount')).toHaveText(`${ receiptAmount }`)
    await expect(page.locator('#receiptStatus')).toHaveText('COMPLETED')
    await expect(page.locator('#receiptName')).toHaveText('Jim Tester')
    await expect(page.locator('#receiptAddress')).toHaveText('1245 Main Street')
    await expect(page.locator('#receiptAddress2')).toHaveText('Apt. 34')
    await expect(page.locator('#receiptCity')).toHaveText('Cape Girardeau')
    await expect(page.locator('#receiptState')).toHaveText('MO')
    await expect(page.locator('#receiptPostalCode')).toHaveText('63701')
    await expect(page.locator('#receiptEmail')).toHaveText('jdmedlock@gmail.com')
    await expect(page.locator('#receiptClassmateBadge')).toHaveText('Jim Tester')
  }

  test('should signup with one attendee for Friday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', "jdmedlock@gmail.com", {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: '', lastName: ''}
    }, false)
    await validateReceipt('0.00')
  }, 1 * 60 * 1000)

  test('should signup with two attendees for Friday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('2', "jdmedlock@gmail.com", {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: 'Kay', lastName: 'Tester'}
    }, false)
    await validateReceipt('60.00')
  }, 1 * 60 * 1000)

})