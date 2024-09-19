/// <reference types="Cypress" >/
import LoginPage from '../pages/loginpage'

describe('Parameterized login test using POM', ()=> {
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
    LoginPage.EnterUsername(LoginInfo.username)
    LoginPage.EnterPassword(LoginInfo.password)
    LoginPage.loginBtn()
    cy.wait(1000)
    LoginPage.loginBtn()
    ///Test to get invalid username error message
    LoginPage.elements.UsernameInput().should('be.visible').type('Timothy Smith')
    LoginPage.EnterPassword(LoginInfo.password)
    LoginPage.loginBtn()
    cy.wait(2000)
    ///Test to get invalid password error message
    LoginPage.EnterUsername(LoginInfo.username)
    LoginPage.elements.PasswordInput().should('be.visible').type('This should work, right?')
    LoginPage.loginBtn()
    cy.wait(5000)
  })
  
  after(() => {
    cy.clearAllSessionStorage()
  })
  
})

