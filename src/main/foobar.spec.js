it('renders learn react link', () => {
    cy.get('a').contains('Learn React');
    console.log(Cypress.version)
});
