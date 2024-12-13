import viewports from "../../../fixtures/viewports";
describe('Hamburger Menu navigation on mobile',() => {
    beforeEach(() => {
        cy.viewport(viewports.mobile.width, viewports.mobile.height);

        cy.visit('https://boostcasino.com')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
        
        cy.get('label > span > span').should('be.visible').click();
        cy.contains('Live Casino').should('be.visible').click();
    });

    it('should display sub menu with categories after tapping Casino.', () =>{
        
        cy.contains('Popular').should('be.visible');
        cy.contains('Game Shows').should('be.visible');
        cy.contains('Roulette').should('be.visible');
        cy.contains('Blackjack').should('be.visible');
        cy.contains('Baccarat').should('be.visible');
        cy.contains('Poker').should('be.visible');
        
    });

    it('should redirect to Popular page when tap on Popular', () => {
        cy.contains('Popular').click();
        cy.url().should('include', '/popular'); // Redirect to live casino page (/live-casino)
    })

    it('should redirect to Game Shows page when tap on Game Shows', () => {
        cy.contains('Game Shows').click();
        cy.url().should('include', '/game-shows');
    });
    
    it('should redirect to Roulette page when tap on Roulette', () => {
        cy.contains('Roulette').click();
        cy.url().should('include', '/roulette');
    });

    it('should redirect to Blackjack page when tap on Blackjack', () => {
        cy.contains('Blackjack').click();
        cy.url().should('include', '/blackjack');
    });

    it('should redirect to Baccarat page when tap on Baccarat', () => {
        cy.contains('Baccarat').click();
        cy.url().should('include', '/baccarat');
    });

    it('should redirect to Poker page when tap on Poker', () => {
        cy.contains('Poker').click();
        cy.url().should('include', '/poker');
    });
})