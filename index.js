// Write your solution in this file!
var customerName = "bob"
var bestCustomer
const leastFavoriteCustomer = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
  }
  console.log(customerName)
  
  function setBestCustomer() {
    bestCustomer = 'not bob'
  }
  
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
  }
  
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'haven'
  }