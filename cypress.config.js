const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ee82sh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Integration/Examples/*.js",
  },
});
