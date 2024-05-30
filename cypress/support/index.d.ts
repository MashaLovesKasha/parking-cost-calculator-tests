/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        chooseParkingLot(lot: 'Valet Parking' | 'Short-Term Parking' | 'Long-Term Garage Parking' | 'Long-Term Surface Parking' | 'Economy Parking'): void
        setEntryDate(date: string): void
        setEntryTime(time: string): void
        setExitDate(date: string): void
        setExitTime(time: string): void
        fillReservationDetailsForm(lot: 'Valet Parking' | 'Short-Term Parking' | 'Long-Term Garage Parking' | 'Long-Term Surface Parking' | 'Economy Parking', entryDate: string, entryTime: string, exitDate: string, exitTime: string): void
        sendReservationDetailsForm(lot: 'Valet Parking' | 'Short-Term Parking' | 'Long-Term Garage Parking' | 'Long-Term Surface Parking' | 'Economy Parking', entryDate: string, entryTime: string, exitDate: string, exitTime: string): void
        enterFirstName(firstName: string): void
        enterLastName(lastName: string): void
        enterEmail(email: string): void
        enterPhoneNumber(phoneNumber: string): void
        selectCarSize(size: 'Small car' | 'Medium car'): void
        enterLicenseNumber(licenseNumber: string): void
        sendBookingDetailsForm(firstName: string, lastName: string, email: string, phoneNumber: string, size: 'Small car' | 'Medium car', licenseNumber: string): void
    }
}