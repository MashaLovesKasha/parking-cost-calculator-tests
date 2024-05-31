const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: false,
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Cypress Inline Reporter',
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    e2e: {
        baseUrl: 'https://practice.expandtesting.com',
        setupNodeEvents(on) {
            require('cypress-mochawesome-reporter/plugin')(on)
        }
    }
})
