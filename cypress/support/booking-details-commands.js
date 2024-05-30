Cypress.Commands.add('enterFirstName', (firstName) => {
    cy.get('[id="firstName"]')
        .type(firstName)
})

Cypress.Commands.add('enterLastName', (lastName) => {
    cy.get('[id="lastName"]')
        .type(lastName)
})

Cypress.Commands.add('enterEmail', (email) => {
    cy.get('[id="email"]')
        .type(email)
})

Cypress.Commands.add('enterPhoneNumber', (phoneNumber) => {
    cy.get('[id="phone"]')
        .type(phoneNumber)
})

Cypress.Commands.add('selectCarSize', (size) => {
    cy.get('[id="vehicleSize"]')
        .select(size)
})

Cypress.Commands.add('enterLicenseNumber', (licenseNumber) => {
    cy.get('[id="lpNumber"]')
        .type(licenseNumber)
})

Cypress.Commands.add('sendBookingDetailsForm', (firstName, lastName, email, phoneNumber, size, licenseNumber) => {
    cy.enterFirstName(firstName)
    cy.enterLastName(lastName)
    cy.enterEmail(email)
    cy.enterPhoneNumber(phoneNumber)
    cy.selectCarSize(size)
    cy.enterLicenseNumber(licenseNumber)
    cy.get('[id="continue"]')
        .click()
    cy.wait(300)
    cy.url().should('include', '/webpark/payment/')
})
