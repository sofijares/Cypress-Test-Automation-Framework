# Cypress-Test-Automation-Framework
How to setup the project locally? 
To setup the project locally, you will need to install cypress through the following terminal command: npm install

How to run the tests?
To run the tests, you will enter the following command in your terminal: npx cypress open. Then, you will choose which test (spec) you would like to run and through which browser. These tests are automatically headed, meaning that you will be able to watch your test running through chosen browser. To simplify your work and to not leave Cypress open, you can run the tests through the commands listed in the question below.

How to run the tests in different browsers?
For HEADLESS tests:
    In your terminal, to run the tests through Chrome, you would type the following: npm run cy-chrome
    In your terminal, to run the tests through Firefox, you would type the following: npm run cy-firefox
    In your terminal, to run the tests through Electron, you would type the following: npm run cy-electron
    In your terminal, to run the tests through Edge, you would type the following: npm run cy-edge
For HEADED tests, simply add -h at the end of your terminal command, e.g npm run cy-chrome-h. Keep in mind, this command will NOT leave Cypress open after completing your tests.

How to review the test reports?
First, you will need to run your tests to have a basis for generating your reports.
Then, in your terminal, you will need to generate reports through the following command: allure generate ./allure-results -o ./allure-report
In case it's already in use, add a '--clean' option to overwrite it.
Finally, you will need to open your report through the following command: allure open ./allure-report