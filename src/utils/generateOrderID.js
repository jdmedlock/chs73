// Convert a string into a hash code that will be used as a unique order ID
const generateOrderID = (concatenatedName) => {
  const originalName = concatenatedName.concat(Date.now()) // Make it unique
  let orderID = 0
  for (let i = 0; i < originalName.length; i++) {
      const code = originalName.charCodeAt(i)
      orderID = ((orderID<<5) - orderID) + code
      orderID = Math.abs(orderID & orderID) // Convert to a positive 32bit integer
  }

  return orderID
}

export default generateOrderID 