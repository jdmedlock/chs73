const FRIDAY_EVENT = 'Friday Gathering'
const SATURDAY_EVENT = 'Saturday Gathering'

const PREPAY_FEE = 25.00
const AT_DOOR_FEE = 30.00

// Transaction fee doc --> https://www.paypal.com/us/business/pricing
const CREDITCARD_TXN_FEE = .0349
const PAYPAL_TXN_FEE = .0259
const PAYPAL_FIXED_FEE = 0.49

const NO_CHARGE = 'na'
const PAY_BY_CARD = 'card'
const PAY_AT_DOOR = 'door'
const PAY_BY_MAIL = 'mail'

const TXN_COMPLETED = 'COMPLETED'
const TXN_PAYMENT_PENDING_MAIL = 'PAYMENT PENDING - MAIL'
const TXN_PAYMENT_PENDING_DOOR = 'PAYMENT PENDING - DOOR'

export { FRIDAY_EVENT, SATURDAY_EVENT, PREPAY_FEE, AT_DOOR_FEE, 
  CREDITCARD_TXN_FEE, PAYPAL_TXN_FEE, PAYPAL_FIXED_FEE, 
  NO_CHARGE, PAY_BY_CARD, PAY_AT_DOOR, PAY_BY_MAIL, 
  TXN_COMPLETED, TXN_PAYMENT_PENDING_MAIL, TXN_PAYMENT_PENDING_DOOR }