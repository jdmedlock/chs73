// Convert a string into a hash code that will be used as a unique order ID
export const generateOrderID = (string) => {
  var orderID = 0
  for (let i = 0; i < string.length; i++) {
      const code = string.charCodeAt(i)
      orderID = ((orderID<<5) - orderID) + code
      orderID = orderID & orderID // Convert to 32bit integer
  }
  return orderID
}