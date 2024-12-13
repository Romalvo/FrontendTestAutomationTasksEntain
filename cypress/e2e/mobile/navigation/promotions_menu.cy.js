import viewports from "../../../fixtures/viewports";
describe('Hamburger Menu navigation on mobile',() => {
    beforeEach(() => {
        cy.viewport(viewports.mobile.width, viewports.mobile.height);

        cy.visit('https://boostcasino.com')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();

        cy.get('label > span > span').should('be.visible').click();
        cy.contains('Promotions').should('be.visible').click();
    });

    it('should display sub menu with categories after tapping Promotions.', () => {
        cy.contains('Welcome Bonus').should('be.visible');
        cy.contains('Boost XP').should('be.visible');
        cy.contains('Casino Promotions').should('be.visible');
        cy.contains('Live Casino Promotions').should('be.visible');
        cy.contains('All Promotions').should('be.visible');
    });

    it('should redirects to the Bonus page when tap on Welcome bonus.', () => {
        cy.contains('Welcome Bonus').should('be.visible').click();
        cy.url().should('include', '/bonus');
    });

    it('should redirects to the Boost XP page when tap on Boost XP.', () => {
        cy.contains('Boost XP').should('be.visible').click();
        cy.url().should('include', '/boostxp');
    });

    it('should redirects to the Casino Promotions page when tap on Casino Promotions.', () => {
        cy.contains('Casino Promotions').should('be.visible').click();
        cy.url().should('include', '/promotions/casino');
    });

    it('should redirects to the Live Casino Promotions page when tap on Live Casino Promotions.', () => {
        cy.contains('Live Casino Promotions').should('be.visible').click();
        cy.url().should('include', '/promotions/live-casino');
    });

    it('should redirects to the All Promotions page when tap on All Promotions.', () => {
        cy.contains('All Promotions').should('be.visible').click();
        cy.url().should('include', '/promotions');
    });


});