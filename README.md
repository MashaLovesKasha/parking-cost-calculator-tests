# parking-cost-calculator-tests
Tests for parking cost calculator https://practice.expandtesting.com/webpark

## Pre-requirements
You need [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to be installed to install proper version of node

## Setup
- `nvm install`
- `nvm use`
- `npm install`

## Usage
To run tests with visual debugger
- `npm run cy:open`
- choose "E2E Testing"
- choose the browser
- click "Start E2E testing"

The test order doesn't matter, you can run them as you wish, but I'd recommend to run them in this order (just because of the order):
- `home.cy.js`
- `booking-details.cy.js`
- `payment-details.cy.js`
- `confirmation.cy.js`

When you finish with one test - click "Specs" icon to see the list of the tests again


To run tests in the console
- `npm run cy:run`

If you want to see the report, open `cypress/reports/html/index.html` file

