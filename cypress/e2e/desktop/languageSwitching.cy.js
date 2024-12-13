describe('Language Switching Test', () => {
    beforeEach(() => {
        cy.setDesktopViewport();
        cy.visit('https://www.boostcasino.com');
    });

    it('should show the language dropdown and switch to Finnish',() => {
        cy.get('[data-cy="navDropdown-language"]').click();

        cy.get('.sc-crXcEl').contains('FI').click();

        cy.url().should('include', '/fi');
      
    });

    it('should show the language dropdown an switch to Estonian',() => {
        cy.get('[data-cy="navDropdown-language"]').click();

        cy.get('.sc-crXcEl').contains('EE').click();

        cy.url().should('include', '/ee');
    });

    it('should show the language dropdown and switch to Russian',() => {
        cy.get('[data-cy="navDropdown-language"]').click();
        
        cy.get('.sc-crXcEl').contains('RU').click();
        
        cy.url().should('include', '/ru');
    })
})