class Checkbox {
    elements = {
        
        Checkbox1 : () => cy.get('#checkboxes > :nth-child(1)'),
        Checkbox2 : () => cy.get('#checkboxes > :nth-child(3)')
    }

}

module.exports = new Checkbox()