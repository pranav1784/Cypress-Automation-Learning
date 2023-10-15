// const { defineConfig } = require("cypress")
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   //return config;
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
//   on("file:preprocessor", browserify.default(config));
//   tasks = sqlServer.loadDBPlugin(config.db);
//   on('task', tasks);  
 
//   on('task',{
 
//         excelToJsonConverter(filePath)
//         {
//           const result = excelToJson({
//           source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
//         });
//         return result;
//         }
//   })
 
 
 
//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;

// }


// module.exports = defineConfig({
//   projectId: "ee82sh",
//   defaultCommandTimeout: 6000,
//   env: {url:"https://www.rahulshettyacademy.com"},
//   projectId: "ee82sh",
//   retries:1,
//   e2e: {
//     setupNodeEvents,
//     specPattern: "cypress/Integration/Examples/BDD/*.feature",
//   },
  
// })

const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
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
specPattern:'cypress/integration/examples/*.js'
  },
});

//messages -> json file ->html
