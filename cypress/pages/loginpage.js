
class LoginPage {
    elements = {
        UsernameInput: () => cy.get('#username'),
        PasswordInput: () => cy.get('#password'),
        ClickButton : () => cy.get('.radius')
    }

    login() {
        this.elements.ClickButton().click()
    }
}


module.exports = new LoginPage()
