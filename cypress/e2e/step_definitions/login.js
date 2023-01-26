// ## Task 35
//  <reference types="cypress"/>
// import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
// Given('I open login page', () => {
//    cy.visit('http://zero.webappsecurity.com/login.html')
// })
// When('I submit login', () => {
//    cy.get('#user_login').type('username')
//    cy.get('#user_password').type('password')
//    cy.contains('Sign in').click()
// })
// Then('I should see homepage', () => {
//    cy.get('#account_summary_tab').should('be.visible')
// })

/// <reference types="cypress"/>
// import function from module cypress-cucumber-preprocessor
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
const loginPage = require("../../pages/LoginPage");


Given('I open login page', () => {
   loginPage.visitUrl()
});

When('I submit login', () => {
   loginPage.fillUsername()
   loginPage.fillPassword()
   loginPage.signIn()
})

Then('I should see homepage', () => {
   cy.wait(1000)
   cy.get('#account_summary_tab').should('be.visible')
})
