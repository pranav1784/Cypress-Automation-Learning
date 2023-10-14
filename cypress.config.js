const { defineConfig } = require("cypress")
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "ee82sh",
  defaultCommandTimeout: 6000,
  env: {url:"https://www.rahulshettyacademy.com"},
  projectId: "ee82sh",
  retries:1,
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/Integration/Examples/*.js",
  },
  
})
