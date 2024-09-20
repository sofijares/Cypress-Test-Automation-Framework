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
        LoginPage.EnterUsername(LoginInfo.username)
        LoginPage.EnterPassword(LoginInfo.password)
        LoginPage.loginBtn()

      })
    
    it('Verifying autoselected checkbox', function() {

        //Verify that checkbox 2 is automatically selected after logging into account
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('[checked=""]').should('be.checked')
        checkboxes.ClickOnCheckbox.ClickCheckbox1()
        checkboxes.ClickOnCheckbox.ClickCheckbox2()
        
      })

      after(() => {
        cy.clearAllSessionStorage()
      })
})