Cypress.Commands.add('checkSummary', (lot, entryDate, entryTime, exitDate, exitTime, parkingPrice) => {
    cy.contains('h4', 'Booking Summary')
        .parent()
        .should('be.visible')

    ;[
        {
            summaryItem: 'Parking:',
            value: lot,
        },
        {
            summaryItem: 'Check In:',
            value: `${entryDate} ${entryTime}`,
        },
        {
            summaryItem: 'Check Out:',
            value: `${exitDate} ${exitTime}`,
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
        .contains(parkingPrice)
})
