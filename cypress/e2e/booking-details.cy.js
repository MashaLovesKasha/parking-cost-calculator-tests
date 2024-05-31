beforeEach(() => {
  cy.visit('/webpark')

  cy.log('Fill in the reservation details to proceed to the next step')
  cy.sendReservationDetailsForm('Valet Parking', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime)
})

describe('Booking details page', () => {
  it('Checks the form elements', () => {
    const formElements = ['firstName', 'lastName', 'email', 'phone', 'vehicleSize', 'lpNumber', 'continue']

    cy.contains('h4', 'Personal Details')
        .parent()
        .should('be.visible')

    formElements.forEach((element) => {
      cy.get('form')
          .find(`[id="${element}"]`)
          .should('be.visible')
    })
  })
  it('Checks the summary is correct', () => {
    cy.checkSummary( 'Valet', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime, Cypress.parkingPrice)
  })
  it('Sends booking details to continue booking process', () => {
    cy.sendBookingDetailsForm(Cypress.firstName, Cypress.lastName, Cypress.email, Cypress.phoneNumber,'Small car', Cypress.licenseNumber)
  })
  // I added the simple negative check, would be nice to add more
  it('Checks the number of field validations', () => {
    cy.get('form')
        .contains('Continue')
        .click()
    cy.get('.invalid-feedback')
        .should('be.visible')
        .should('have.length', 6)
  })
})
