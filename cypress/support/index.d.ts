/// <reference types="cypress" />

type ParkingLot = 'Valet Parking' | 'Short-Term Parking' | 'Long-Term Garage Parking' | 'Long-Term Surface Parking' | 'Economy Parking'
type CarSize = 'Small car' | 'Medium car'

declare namespace Cypress {
    interface Chainable<Subject> {
        chooseParkingLot(lot: ParkingLot): void
        setEntryDate(date: string): void
        setEntryTime(time: string): void
        setExitDate(date: string): void
        setExitTime(time: string): void
        fillReservationDetailsForm(lot: ParkingLot, entryDate: string, entryTime: string, exitDate: string, exitTime: string): void
        sendReservationDetailsForm(lot: ParkingLot, entryDate: string, entryTime: string, exitDate: string, exitTime: string): void
        checkSummary(lot: string, entryDate: string, entryTime: string, exitDate: string, exitTime: string, parkingPrice: string): void
        enterFirstName(firstName: string): void
        enterLastName(lastName: string): void
        enterEmail(email: string): void
        enterPhoneNumber(phoneNumber: string): void
        selectCarSize(size: CarSize): void
        enterLicenseNumber(licenseNumber: string): void
        sendBookingDetailsForm(firstName: string, lastName: string, email: string, phoneNumber: string, size: CarSize, licenseNumber: string): void
        enterCardNumber(cardNumber: string): void
        enterExpirationDate(expirationDate: string): void
        enterCVC(CVC: string): void
        sendPaymentDetailsForm(cardNumber: string, expirationDate: string, CVC: string): void
    }
}