/// <reference types="Cypress" >/
import LoginPage from '../pages/loginpage'
import checkboxes from '../pages/checkboxes'

describe('Checkbox verification using POM', ()=> {
    
    let LoginInfo
    before(() => {
    cy.getAllSessionStorage()
    cy.fixture('param').then((data) =>{
    LoginInfo = data
  
    })
    })

    it('Login into herokuapp', function() {

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.wait(1000)
        LoginPage.elements.UsernameInput().should('be.visible').type(LoginInfo.username)
        LoginPage.elements.PasswordInput().should('be.visible').type(LoginInfo.password)
        LoginPage.login()
        cy.wait(1000)

      })
    
    it('Verifying autoselected checkbox', function() {

        //Verify that checkbox 2 is automatically selected after logging into account and going to the following url
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.wait(1000)
        cy.get('[checked=""]').should('be.checked')
        cy.wait(1000)
        checkboxes.elements.Checkbox1().should('be.visible').click()
        cy.wait(1000)
        checkboxes.elements.Checkbox2().should('be.checked').click()
        cy.wait(5000)
      })

      after(() => {
        cy.clearAllSessionStorage()
      })
})