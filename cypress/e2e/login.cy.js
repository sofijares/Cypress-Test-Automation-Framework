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
    LoginPage.EnterUsername(LoginInfo.username)
    LoginPage.EnterPassword(LoginInfo.password)
    LoginPage.loginBtn()
    LoginPage.loginBtn()
    ///Test to get invalid username error message
    LoginPage.elements.UsernameInput().should('be.visible').type('Timothy Smith')
    LoginPage.EnterPassword(LoginInfo.password)
    LoginPage.loginBtn()
    ///Test to get invalid password error message
    LoginPage.EnterUsername(LoginInfo.username)
    LoginPage.elements.PasswordInput().should('be.visible').type('This should work, right?')
    LoginPage.loginBtn()
    
  })
  
  after(() => {
    cy.clearAllSessionStorage()
  })
  
})

