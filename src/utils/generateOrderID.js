// Convert a string into a hash code that will be used as a unique order ID
const generateOrderID = (concatenatedName) => {
  let orderID = 0
  for (let i = 0; i < concatenatedName.length; i++) {
      const code = concatenatedName.charCodeAt(i)
      orderID = ((orderID<<5) - orderID) + code
      orderID = Math.abs(orderID & orderID) // Convert to a positive 32bit integer
  }

  return orderID
}

export default generateOrderID 