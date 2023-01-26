# eduworks-section-7
A Cypress framework created by Andiono Afianto for eduworks training section 7 BDD Testing framework

### Step 1: How to configure your cypress
1. yarn init
2. yarn add cypress --dev prettier cypress-cucumber-preprocessor

### Step 2: How to Load .feature test file to your cypress app
Add this code to your cypress.config.js

specPattern: "**/*.feature"

### Step 3: Add this to your package.json

  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinition": true,
    "stepDefinitions": "cypress/e2e/step_definitions"
  },

stepDefinitions is required to make your gherkin works

### Step 4: Run your cypress

Notes: 
1. To make you easier your can clone this and make it to complete your task
2. Cypress 10.8.0 needs you to update your node, please look up for how to update your node

# Addtional thinks to learn and research
### Add Cypress Webpack Preprocessor - https://www.npmjs.com/package/@cypress/webpack-preprocessor
npm install --save-dev @cypress/webpack-preprocessor

### Install TypeScript - https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript
npm install --save-dev typescript

### Add @badeball/cypress-cucumber-preprocessor
npm install @badeball/cypress-cucumber-preprocessor

### cypress-cucumber-boilerplate
https://github.com/JoanEsquivel/cypress-cucumber-boilerplate