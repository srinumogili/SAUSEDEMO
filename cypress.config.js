const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
           pageLoadTimeout: 10000,
          video: false, 
          screenshotOnRunFailure: false,
          watchForFileChanges: true,
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",                     
    setupNodeEvents(on, config) {
       
    },
    chromeWebSecurity: false,
  },
});

