const { defineConfig } = require("cypress")
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")
const excelToJson = require("convert-excel-to-json")
const fs = require("fs")
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on("file:preprocessor", browserify.default(config))

  // Make sure to return the config object as it might have been modified by the plugin.

  on("task", {
    excelJsonConvertor(fileName) {
      const result = excelToJson({
        source: fs.readFileSync(fileName), // fs.readFileSync return a Buffer
      })
      return result
    },
  })
  return config
}
module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
  },
  projectId: "ee82sh",
  e2e: {
    setupNodeEvents,
    //specPattern: 'cypress/integration/examples/BDD/*.feature'
    specPattern: "cypress/integration/examples/*.js",
  },
})

//messages -> json file ->html
