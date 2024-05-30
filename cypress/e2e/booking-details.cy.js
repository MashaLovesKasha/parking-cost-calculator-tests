beforeEach(() => {
  cy.visit('/webpark')

  cy.log('Fill in the reservation details to proceed to the next step')
  cy.sendReservationDetailsForm('Valet Parking', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime)
})

describe('Booking details page', () => {
  it('Checks the form elements', () => {
    // I'd add visual tests here to check the whole block
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
    cy.contains('h4', 'Booking Summary')
        .parent()
        .should('be.visible')

    ;[
      {
        summaryItem: 'Parking:',
        value: 'Valet',
      },
      {
        summaryItem: 'Check In:',
        value: `${Cypress.todayDate} ${Cypress.entryTime}`,
      },
      {
        summaryItem: 'Check Out:',
        value: `${Cypress.tomorrowDate} ${Cypress.exitTime}`,
      },
    ].forEach(({summaryItem, value}) => {
      cy.get('[id="reservationDetails"]')
          .contains('h6', summaryItem)
          .parents('li')
          .contains(value)
    })
    cy.get('[id="reservationDetails"]')
        .contains('Total (EUR):')
        .next()
        .contains(Cypress.parkingPrice)
  })
  // I added the simple negative check, would be nice to add more
  it('Checks the number of field validation', () => {
    cy.get('form')
        .contains('Continue')
        .click()
    cy.get('.invalid-feedback')
        .should('have.length', 6)
  })
  it('Fill in the booking details (maybe move it to the payment test)', () => {
    cy.sendBookingDetailsForm(Cypress.firstName, Cypress.lastName, Cypress.email, Cypress.phoneNumber,'Small car', Cypress.licenseNumber)
  })
})
