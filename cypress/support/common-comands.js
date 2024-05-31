Cypress.Commands.add('checkSummary', (lot, entryDate, entryTime, exitDate, exitTime, parkingPrice) => {
    cy.get('[id="reservationDetails"]')
        .as('summary')
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
        cy.get('@summary')
            .contains('h6', summaryItem)
            .parents('li')
            .contains(value)
    })
    cy.get('@summary')
        .contains('Total (EUR):')
        .next()
        .contains(parkingPrice)
})
