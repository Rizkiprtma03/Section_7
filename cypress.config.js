const { defineConfig } = require('cypress')
    // import * as webpack from "@cypress/webpack-preprocessor";
    // import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const { default: preprocessor } = require('cypress-cucumber-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber())
        },

        video: false,
        defaultCommandTimeout: 5000,
        pageLoadTimeout: 10000,
        //ignoreTestFiles: ['*.js', '*.md'],

        // Load test file
        specPattern: '**/*.feature',
    },
})