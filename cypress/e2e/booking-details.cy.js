// maybe move it for booking test
it('Starts booking process', () => {
  cy.fillReservationDetailsForm('Valet Parking', '2024-06-10', '15:10', '2024-06-11', '15:11')
  cy.get('[id="result"]')
      .should('be.visible')
      .find('[id="resultValue"]')
      .should('have.text','36.00€')
  cy.get('[id="reserveOnline"]')
      .should('be.visible')
      .contains('Book Now!')
      .click()
  cy.url().should('include', '/webpark/booking/')
})