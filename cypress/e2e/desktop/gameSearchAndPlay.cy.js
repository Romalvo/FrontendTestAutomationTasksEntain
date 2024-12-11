describe('Search and Play game', () => {
    before(() => {
        cy.setDesktopViewport();
        cy.visit('https://www.boostcasino.com');
    });

    it('should allow a user to search and play "Book of dead" games', () => {
       
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();

        cy.get('#\\:r0\\:').should('be.visible');

        cy.get('#\\:r0\\:').type('Book of dead');
        cy.get('[data-testid="SearchIcon"]').click();

        cy.contains('Book of Dead').should('be.visible');

        //cy.get('a[href="/slots/book-of-dead"]').click();
        cy.get('.sc-dwLEzm gVdbyM').trigger('mouseover');

        cy.get('button[type="button"]')
            .contains('Play')
            .should('be.visible')
            .click();

        cy.url().should('include', '/slots/book-of-dead');

        cy.get('#pngProgressBar', {timeout:10000}).should('be.visible');

    })
})