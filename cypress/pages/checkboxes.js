class Checkbox {
    elements = {
        
        Checkbox1 : () => cy.get('#checkboxes > :nth-child(1)'),
        Checkbox2 : () => cy.get('#checkboxes > :nth-child(3)')
    }

    ClickOnCheckbox = {
        ClickCheckbox1 : () => this.elements.Checkbox1().click(),
        ClickCheckbox2 : () => this.elements.Checkbox2().click()
    }

}

module.exports = new Checkbox()