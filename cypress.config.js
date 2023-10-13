const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "ee82sh",
  defaultCommandTimeout: 6000,
  env: {url:"https://www.rahulshettyacademy.com"},
  projectId: "ee82sh",
  retries:1,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Integration/Examples/*.js",
  },
  
})
