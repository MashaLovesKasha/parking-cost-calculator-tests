/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        chooseParkingLot(lot: string): void
        setEntryDate(date: string): void
        setEntryTime(time: string): void
        setExitDate(date: string): void
        setExitTime(time: string): void
        fillReservationDetailsForm(lot: string, entryDate: string, entryTime: string, exitDate: string, exitTime: string): void
        formatDate(date: Date): Chainable<string>
    }
}