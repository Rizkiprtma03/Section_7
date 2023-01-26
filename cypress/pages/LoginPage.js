const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'input[name="submit"]'

class LoginPage{
    visitUrl() {
        cy.visit(URL)
    }
    fillUsername() {
        cy.get(USERNAME).type('username')
    }
    fillPassword() {
        cy.get(PASSWORD).type('password')
    }
    signIn() {
        cy.get(SIGN_IN).click()
    }
}
module.exports = new LoginPage();
