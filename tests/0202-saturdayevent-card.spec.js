import { chromium } from 'playwright'
import { test, expect } from '@playwright/test'
import { PAY_BY_CARD, PAY_BY_MAIL, PAY_AT_DOOR } from '../src/utils/constants.js'

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
    const eventsMenuItem = page.locator('a:has-text("events")')
    await expect(eventsMenuItem).toBeDefined()
    await eventsMenuItem.click()
    await page.waitForSelector('text="Upcoming Events"')

    // Signup for the Saturday event
    const saturdaySignupLink = await page.locator('[id=SaturdaySignupLink]')
    await expect(saturdaySignupLink).toBeDefined()
    await saturdaySignupLink.click()
    await page.waitForSelector('text="Signup for Saturday"')

    // Proceed to the checkout
    const checkoutLink = await page.locator('a:has-text("Proceed to checkout")')
    await expect(checkoutLink).toBeDefined()
    await checkoutLink.click()
    await page.waitForSelector('text="Checkout"')
  }

  // Specify attendee options
  const selectNoAttendees = async (noAttendees, email, badgeNames, willHelpClassmate, isVeteran) => {
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
    const emailLabel = await page.locator('label:has-text("Your email:")')
    await expect(emailLabel).toBeDefined()
    await page.getByPlaceholder('Your email').fill(`${ email }`)
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

  // Select the payment method 
  const choosePaymentMethod = async (method) => {
    switch (method) {
      case PAY_BY_CARD:
        await page.getByLabel("Credit/debit card").check()
        break
      case PAY_BY_MAIL:
        await page.getByLabel("By mail").check()
        break
      case PAY_AT_DOOR:
        await page.getByLabel("At the door").check()
        break
    }
  }

  // Pay for the event. Note that PayPal adds an iframe containing the
  // payment buttons and then a second, nested iframe within it containing
  // the card form.
  const fillInCardForm = async () => {
    const calculateBtn = page.getByRole('button', { name: 'Register & pay' })
    await calculateBtn.scrollIntoViewIfNeeded()
    await calculateBtn.click()
    const paypalFrame = await page.frameLocator('.component-frame')
    await paypalFrame.locator('span:has-text("Debit or Credit Card")').click()
    const cardFormFrame = await paypalFrame.frameLocator('[title=paypal_card_form]')
    await cardFormFrame.locator('#credit-card-number').click()
    await cardFormFrame.locator('#credit-card-number').fill('4012000033330026')
    await cardFormFrame.locator('#expiry-date').click()
    await cardFormFrame.locator('#expiry-date').fill('0523')
    await cardFormFrame.locator('#credit-card-security').click()
    await cardFormFrame.locator('#credit-card-security').fill('523')
    await cardFormFrame.locator('[autocomplete=cc-given-name]').click()
    await cardFormFrame.locator('[autocomplete=cc-given-name]').fill('Jim')
    await cardFormFrame.locator('[autocomplete=cc-family-name]').click()
    await cardFormFrame.locator('[autocomplete=cc-family-name]').fill('Playwright')
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
    await cardFormFrame.locator('#submit-button').click()
  }

  // Validate the payment receipt
  const validateReceipt = async (receiptAmount, willHelpClassmate, isVeteran) => {
    await page.waitForSelector('[id=paymentReceipt]')
    await expect(page.locator('#receiptOrderId')).not.toHaveText('')
    await expect(page.locator('#receiptAmount')).toHaveText(`${ receiptAmount }`)
    await expect(page.locator('#receiptStatus')).toHaveText('COMPLETED')
    if (receiptAmount > 0) {
      await expect(page.locator('#receiptName')).toHaveText('Jim Playwright')
      await expect(page.locator('#receiptAddress')).toHaveText('1245 Main Street')
      await expect(page.locator('#receiptAddress2')).toHaveText('Apt. 34')
      await expect(page.locator('#receiptCity')).toHaveText('Cape Girardeau')
      await expect(page.locator('#receiptState')).toHaveText('MO')
      await expect(page.locator('#receiptPostalCode')).toHaveText('63701')
    }
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

    await expect(page.locator('#receiptClassmateBadge')).toHaveText('Jim Playwright')
  }

  //--------------------------------------------------------------------------
  // Tests
  //--------------------------------------------------------------------------

  test('0202:01-should signup for Saturday with one attendee', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: '', lastName: ''}
    }, DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await fillInCardForm()
    await validateReceipt('$ 35.00', DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
  }, 2 * 60 * 1000)

  test('0202:02-should signup for Saturday with one attendee + sponsor', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: '', lastName: ''}
    }, DO_SPONSOR_CLASSMATE, ISNT_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await fillInCardForm()
    await validateReceipt('$ 70.00', DO_SPONSOR_CLASSMATE, ISNT_VETERAN)
  }, 2 * 60 * 1000)

  test('0202:03-should signup for Saturday with one attendee + veteran', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: '', lastName: ''}
    }, DONT_SPONSOR_CLASSMATE, IS_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await page.getByRole('button', { name: 'Register & pay' }).click()
    await validateReceipt('$ 0', DONT_SPONSOR_CLASSMATE, IS_VETERAN)
  }, 2 * 60 * 1000)

  test('0202:04-should signup for Saturday with one attendee + sponsor + veteran', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('1', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: '', lastName: ''}
    }, DO_SPONSOR_CLASSMATE, IS_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await fillInCardForm()
    await validateReceipt('$ 35.00', DO_SPONSOR_CLASSMATE, IS_VETERAN)
  }, 2 * 60 * 1000)

  test('0202:05-should signup for Saturday with two attendees', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('2', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: 'Kay', lastName: 'Playwright'}
    }, DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await fillInCardForm()
    await validateReceipt('$ 70.00', DONT_SPONSOR_CLASSMATE, ISNT_VETERAN)
  }, 2 * 60 * 1000)

  test('0202:06-should signup for Saturday with two attendees + sponsor', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('2', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: 'Kay', lastName: 'Playwright'}
    }, DO_SPONSOR_CLASSMATE, ISNT_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await fillInCardForm()
    await validateReceipt('$ 105.00', DO_SPONSOR_CLASSMATE, ISNT_VETERAN)
  }, 2 * 60 * 1000)

  test('0202:07-should signup for Saturday with two attendees + veteran', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('2', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: 'Kay', lastName: 'Playwright'}
    }, DONT_SPONSOR_CLASSMATE, IS_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await page.getByRole('button', { name: 'Register & pay' }).click()
    await validateReceipt('$ 0', DONT_SPONSOR_CLASSMATE, IS_VETERAN)
  }, 2 * 60 * 1000)

  test('0202:08-should signup for Saturday with two attendees + sponsor + veteran', async () => {
    // Listen for all console logs
    page.on('console', msg => console.log(msg.text()))
    await signupAndCheckout()
    await selectNoAttendees('2', 'jdmedlock@gmail.com', {
      classmate: {firstName: 'Jim', lastName: 'Playwright'}, 
      companion: {firstName: 'Kay', lastName: 'Playwright'}
    }, DO_SPONSOR_CLASSMATE, IS_VETERAN)
    await choosePaymentMethod(PAY_BY_CARD)
    await fillInCardForm()
    await validateReceipt('$ 35.00', DO_SPONSOR_CLASSMATE, IS_VETERAN)
  }, 2 * 60 * 1000)

})