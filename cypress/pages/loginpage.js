import { BasePage } from "./basepage";

class LoginPage extends BasePage {
    constructor (){
        super()
    }
    elements = {
        UsernameInput: () => cy.get('#username'),
        PasswordInput: () => cy.get('#password'),
        ClickButton : () => cy.get('.radius')
    }

    EnterUsername(username) {
        this.elements.UsernameInput().clear();
        this.elements.UsernameInput().type(username)
    }

    EnterPassword(password) {
        this.elements.PasswordInput().clear()
        this.elements.PasswordInput().type(password)
    }

    loginBtn() {
        this.elements.ClickButton().click()
    }
}


module.exports = new LoginPage()
