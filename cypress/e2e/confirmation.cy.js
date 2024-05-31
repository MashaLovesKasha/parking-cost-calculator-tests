before(() => {
    cy.visit('/webpark')

    cy.log('Send reservation details to proceed to the next step')
    cy.sendReservationDetailsForm('Valet Parking', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime)
    cy.log('Send booking details to proceed to the payment')
    cy.sendBookingDetailsForm(Cypress.firstName, Cypress.lastName, Cypress.email, Cypress.phoneNumber,'Small car', Cypress.licenseNumber)
    cy.log('Send payment details to finish the booking')
    cy.sendPaymentDetailsForm(Cypress.cardNumber, Cypress.expirationDate, Cypress.CVC)
})

describe('Confirmation page', () => {
    it('Checks the page elements', () => {
        cy.contains('Thank you, your booking is confirmed!')
        cy.checkSummary('Valet', Cypress.todayDate, Cypress.entryTime, Cypress.tomorrowDate, Cypress.exitTime, Cypress.parkingPrice)

        cy.log('Checks that there is the same unique ID in the url and on the confirmation page')
        cy.url().then((url) => {
            const bookingId = url.split('/').pop()

            cy.get('[id="reservationDetails"]')
                .contains('h6', 'ID:')
                .parents('li')
                .contains(bookingId)
            cy.get('[id="barcode"]')
                .should('be.visible')
                .contains(bookingId)
        })
    })
})
