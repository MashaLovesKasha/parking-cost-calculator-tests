beforeEach(() => {
    cy.visit('/webpark')

    cy.log('Send reservation details to proceed to the next step')
    cy.sendReservationDetailsForm('Valet Parking', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime)
    cy.log('Send booking details to proceed to the payment')
    cy.sendBookingDetailsForm(Cypress.firstName, Cypress.lastName, Cypress.email, Cypress.phoneNumber,'Small car', Cypress.licenseNumber)
})
describe('Payment details page', () => {
    it('Checks the form elements', () => {
        const formElements = ['cardNumber', 'expirationDate', 'securityCode']

        cy.contains('h4', 'Payment Card Information')
            .parent()
            .should('be.visible')

        formElements.forEach((element) => {
            cy.get('form')
                .find(`[id="${element}"]`)
                .should('be.visible')
        })
    })
    it('Checks the summary is correct', () => {
        cy.checkSummary('Valet', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime, Cypress.parkingPrice)
    })
    it('Sends payment details to continue booking process', () => {
        cy.sendPaymentDetailsForm(Cypress.cardNumber, Cypress.expirationDate, Cypress.CVC)
    })
    // I added the simple negative check, would be nice to add more
    it('Checks the number of field validation', () => {
        cy.get('form')
            .contains('Complete Reservation')
            .click()
        cy.get('.invalid-feedback')
            .should('be.visible')
            .should('have.length', 3)
    })
})
