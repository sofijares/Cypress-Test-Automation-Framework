# Cypress-Test-Automation-Framework
How to setup the project locally? 
To setup the project locally, you will need to install cypress through the following terminal command: npm install

How to run the tests:
To run the tests, you will enter the following command in your terminal: npx cypress open. Then, you will choose which test (spec) you would like to run and through which browser. These tests are automatically headed, meaning that you will be able to watch your test running through chosen browser. To simplify your work and to not leave Cypress open, you can run the tests through the commands listed in the question below.

How to run the tests in different browsers?
For HEADLESS tests:
    In your terminal, to run the tests through Chrome, you would type the following: npx cypress run --browser chrome
    In your terminal, to run the tests through Firefox, you would type the following: npx cypress run --browser firefox
    In your terminal, to run the tests through Electron, you would type the following: npx cypress run --browser electron
    In your terminal, to run the tests through Edge, you would type the following: npx cypress run --browser edge
For HEADED tests, simply add --headed at the end of your terminal command. Keep in mind, this command will NOT leave Cypress open after completing your tests.

How to review the test reports?
Check console.