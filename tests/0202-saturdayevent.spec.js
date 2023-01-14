import { chromium } from 'playwright'
import { test, expect } from '@playwright/test'

const DO_SPONSOR_CLASSMATE = true
const DONT_SPONSOR_CLASSMATE = false
const IS_VETERAN = true
const ISNT_VETERAN = false

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
    const eventsMenuItem = page.locator('a:id("SaturdaySignupLink")')
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
  }

  const selectNoAttendees = async (noAttendees, badgeNames, willHelpClassmate, isVeteran) => {
    // Select no. attendees
    const noAttendeesBtn = await page.locator('button:has-text("No. Attendees")')
    await noAttendeesBtn.click()
    const oneAttendeesLink = await page.locator(`a:has-text("${ noAttendees }")`)
    await expect(oneAttendeesLink).toBeDefined()
    await oneAttendeesLink.click()

    // Fill in the badge names
    await page.waitForSelector('text="Your name badge:"')
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

    // Check option for military veteran
    if (isVeteran) {
      await page.getByLabel("Click here if you are a Veteran. There's no admission fee for you and your companion.").check()
    }
  }

  // Pay for the event. Note that PayPal adds an iframe containing the
  // payment buttons and then a second, nested iframe within it containing
  // the card form.
  const fillInCardForm = async () => {
    await page.getByRole('button', { name: 'Calculate & checkout' }).click()
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
    await cardFormFrame.locator('[name=postcode]').click()
    await cardFormFrame.locator('[name=postcode]').fill('63701')
    await cardFormFrame.locator('[autocomplete=tel]').click()
    await cardFormFrame.locator('[autocomplete=tel]').fill('6365551212')
    await cardFormFrame.locator('[autocomplete=email]').click()
    await cardFormFrame.locator('[autocomplete=email]').fill('jdmedlock@gmail.com')
    await cardFormFrame.locator('#submit-button').click()
  }

  // Validate the payment receipt
  const validateReceipt = async (receiptAmount, willHelpClassmate, isVeteran) => {
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

    if (willHelpClassmate) {
      await expect(page.locator('#receiptSponsor')).toHaveText('Yes')
    } else {
      await expect(page.locator('#receiptSponsor')).toHaveText('No')
    }

    if(isVeteran) {
      await expect(page.locator('#receiptVeteran')).toHaveText('Yes')
    } else {
      await expect(page.locator('#receiptVeteran')).toHaveText('No')
    }

    await expect(page.locator('#receiptClassmateBadge')).toHaveText('Jim Tester')
  }

  //--------------------------------------------------------------------------
  // Tests
  //--------------------------------------------------------------------------

  test('should signup with one attendee for Saturday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: '', lastName: ''}
    }, DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
    await fillInCardForm()
    await validateReceipt('30.00', DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
  }, 2 * 60 * 1000)

  test('should signup with one attendee for Saturday gathering + donate', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: '', lastName: ''}
    }, DO_SPONSOR_CLASSMATE, ISNT_VETERAN)
    await fillInCardForm()
    await validateReceipt('60.00', DO_SPONSOR_CLASSMATE, ISNT_VETERAN)
  }, 2 * 60 * 1000)

  test('should signup with two attendees for Saturday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('2', {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: 'Kay', lastName: 'Tester'}
    }, DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
    await fillInCardForm()
    await validateReceipt('60.00', DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
  }, 2 * 60 * 1000)

  test('should signup as veteran with one attendee for Saturday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: '', lastName: ''}
    }, DONT_SPONSOR_CLASSMATE, IS_VETERAN)
    await fillInCardForm()
    await validateReceipt('0.00', DONT_SPONSOR_CLASSMATE, IS_VETERAN)
  }, 2 * 60 * 1000)

  test('should signup as veteran with one attendee for Saturday gathering + donate', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: '', lastName: ''}
    }, DO_SPONSOR_CLASSMATE, IS_VETERAN)
    await fillInCardForm()
    await validateReceipt('30.00', DO_SPONSOR_CLASSMATE, IS_VETERAN)
  }, 2 * 60 * 1000)

  test('should signup as veteran with two attendees for Saturday gathering', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('2', {
      classmate: {firstName: 'Jim', lastName: 'Tester'}, 
      companion: {firstName: 'Kay', lastName: 'Tester'}
    }, DONT_SPONSOR_CLASSMATE, IS_VETERAN)
    await fillInCardForm()
    await validateReceipt('30.00', DONT_SPONSOR_CLASSMATE, IS_VETERAN)
  }, 2 * 60 * 1000)
})