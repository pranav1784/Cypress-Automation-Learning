const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "ee82sh",
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Integration/Examples/*.js",
  },
})
