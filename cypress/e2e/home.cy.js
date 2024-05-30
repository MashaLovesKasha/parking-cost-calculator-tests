beforeEach(() => {
  cy.visit('/webpark')
})


describe('Home page', () => {
  describe('Reservation details block', () => {
    it('Checks the "Reservation details" form elements', () => {
      // I'd add visual tests here to check the whole block
      const formElements = ['parkingLot', 'entryDate', 'exitDate', 'exitTime', 'calculateCost']

      cy.contains('h5', 'Reservation details')
          .parent()
          .should('be.visible')

      formElements.forEach((element) => {
        cy.get('[id="reservationDetailsForm"]')
            .find(`[id="${element}"]`)
            .should('be.visible')
      })
      cy.log('The button for booking should not be available by default')
      cy.get('[id="reserveOnline"]')
          .should('not.exist')
    })
    // I'd add more checks here for each parking lot options
    it('Calculates cost for valet parking correctly', () => {
      cy.fillReservationDetailsForm('Valet Parking', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime)
      cy.get('[id="result"]')
          .should('be.visible')
          .find('[id="resultValue"]')
          .should('have.text',Cypress.parkingPrice)
      cy.get('[id="reserveOnline"]')
          .should('be.visible')
          .contains('Book Now!')
    })
    // This one fails, I think the form has a bug here
    // The parking cost should be 3€ in this case
    it('Calculates cost short-term parking correctly', () => {
      cy.fillReservationDetailsForm('Short-Term Parking', Cypress.todayDate, '15:10', Cypress.todayDate, '16:30')
      cy.get('[id="result"]')
          .should('be.visible')
          .find('[id="resultValue"]')
          .should('have.text','3.00€')
    })
    // Not an important test, but I wanted to check an invalid case
    // I'd add more tests for invalid data here
    it('Checks invalid date input', () => {
      cy.fillReservationDetailsForm('Valet Parking', Cypress.tomorrowDate, '09:10', Cypress.todayDate, '00:00')
      cy.get('[id="result"]')
          .should('be.visible')
          .contains('The entry date and time must be before the exit date and time!')
    })
  })

  describe('Parking rates block', () => {
    // Not an important test, but I wanted to check some UI elements
    it('Checks the "Parking rates" form elements', () => {
      // I'd add visual tests here to check the whole block
      cy.contains('h5', 'Parking Rates')
          .parent()
          .as('parking-rates')
          .should('be.visible')

      ;[
        'Valet Parking',
        'Short-Term (hourly) Parking',
        'Long-Term Garage Parking',
        'Long-Term Surface Parking',
        'Economy Lot Parking'
      ].forEach((lot) => {
        cy.get('@parking-rates')
            .contains('.card-header', lot)
            .next()
            .should('have.class','card-block')
            .should('not.be.empty')
      })
    })
  })
})
