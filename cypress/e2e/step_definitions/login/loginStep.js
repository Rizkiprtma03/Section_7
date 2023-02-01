/// <reference types="cypress"/>
// import function from module cypress-cucumber-preprocessor
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from 'F:/Section_7/cypress/pages/LoginPage'

// Given, When dan Then berdasarkan pada file yang sesuai misal pada case ini
//yaitu file feature/login.feature
Given('I open login page', () => {
    LoginPage.visitUrl()
})

When('I submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.signIn()
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})