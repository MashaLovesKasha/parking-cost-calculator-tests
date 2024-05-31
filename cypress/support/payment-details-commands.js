Cypress.Commands.add('enterCardNumber', (cardNumber) => {
    cy.get('[id="cardNumber"]')
        .type(cardNumber)
})

Cypress.Commands.add('enterExpirationDate', (expirationDate) => {
    cy.get('[id="expirationDate"]')
        .type(expirationDate)
})

Cypress.Commands.add('enterCVC', (CVC) => {
    cy.get('[id="securityCode"]')
        .type(CVC)
})

Cypress.Commands.add('sendPaymentDetailsForm', (cardNumber, expirationDate, CVC) => {
    cy.enterCardNumber(cardNumber)
    cy.enterExpirationDate(expirationDate)
    cy.enterCVC(CVC)
    cy.get('[id="completeReservation"]')
        .click()
    cy.wait(300)
    cy.url().should('include', '/webpark/confirmation/')
})
