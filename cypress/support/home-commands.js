Cypress.Commands.add('chooseParkingLot', (lot) => {
    cy.get('[id="parkingLot"]')
        .select(lot)
})

Cypress.Commands.add('setEntryDate', (date) => {
    cy.get('[id="entryDate"]')
        .clear()
        .type(date)
})

Cypress.Commands.add('setEntryTime', (time) => {
    cy.get('[id="entryTime"]')
        .clear()
        .type(time)
})

Cypress.Commands.add('setExitDate', (date) => {
    cy.get('[id="exitDate"]')
        .clear()
        .type(date)
})

Cypress.Commands.add('setExitTime', (time) => {
    cy.get('[id="exitTime"]')
        .clear()
        .type(time)
})

Cypress.Commands.add('fillReservationDetailsForm', (lot, entryDate, entryTime, exitDate, exitTime) => {
    cy.chooseParkingLot(lot)
    cy.setEntryDate(entryDate)
    cy.setEntryTime(entryTime)
    cy.setExitDate(exitDate)
    cy.setExitTime(exitTime)
    cy.get('[id="calculateCost"]')
        .click()
})

Cypress.Commands.add('sendReservationDetailsForm', (lot, entryDate, entryTime, exitDate, exitTime) => {
    cy.fillReservationDetailsForm(lot, entryDate, entryTime, exitDate, exitTime)
    cy.get('[id="actions"]')
        .contains('Book Now!')
        .click()
    cy.wait(300)
    cy.url().should('include', '/webpark/booking/')
})
