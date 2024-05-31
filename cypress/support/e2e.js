import './home-commands'
import './booking-details-commands'
import './payment-details-commands'
import './common-comands'


const todayDate = new Date()
const tomorrowDate = new Date(todayDate)
tomorrowDate.setDate(todayDate.getDate() + 1)

// I need to format dates to get yyyy-mm-dd format
const formattedTodayDate = todayDate.toISOString().slice(0, 10)
const formattedTomorrowDate = tomorrowDate.toISOString().slice(0, 10)

// Cypress global objects
// For home page
Cypress.todayDate = formattedTodayDate
Cypress.tomorrowDate = formattedTomorrowDate
Cypress.entryTime = '15:10'
Cypress.exitTime = '15:11'
Cypress.parkingPrice = '36.00€'

// For booking details page
Cypress.firstName = 'Mariia'
Cypress.lastName = 'Testonen'
Cypress.email = 'test@test.test'
Cypress.phoneNumber = '05051155'
Cypress.licenseNumber = 'test1234'

// For payment details page
Cypress.cardNumber = '5200828282828223'
Cypress.expirationDate = '1290'
Cypress.CVC = '123'
