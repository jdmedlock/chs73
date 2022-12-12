// Convert a string into a hash code that will be used as a unique order ID
const generateOrderID = (concatenatedName) => {
  var orderID = 0
  for (let i = 0; i < concatenatedName.length; i++) {
      const code = concatenatedName.charCodeAt(i)
      orderID = ((orderID<<5) - orderID) + code
      orderID = orderID & orderID // Convert to 32bit integer
  }
  return orderID
}

export default generateOrderID 