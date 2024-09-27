Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Fabio')
    cy.get('#lastName').type('Scherer')
    cy.get('#email').type('fabio.scherer@totvs.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})