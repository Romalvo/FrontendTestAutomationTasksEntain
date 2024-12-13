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
        cy.get('figure:has(img[alt="BookofDeadThumbnail"])').trigger('mouseover');

        cy.get('button')
            .filter(':contains("Play")')
            .should('be.visible')
            .eq(1)
            .click();
        cy.wait(5000);

        cy.url().should('include', '/slots/book-of-dead');

        

        cy.get('#pngProgressContainer', {timeout:10000}).should('be.visible');

        cy.get('#pngProgressBar')
            .should('exist')
            .and('have.attr', 'data-rawvalue', '100');

        cy.get('pngPreloader').should('not.be.visible');

    })
})