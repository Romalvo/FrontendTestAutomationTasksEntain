import viewports from "../../../fixtures/viewports";
describe('Hamburger Menu navigation on mobile',() => {
    beforeEach(() => {
        cy.viewport(viewports.mobile.width, viewports.mobile.height);

        cy.visit('https://boostcasino.com')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
        cy.wait(5000);

        cy.get('label > span > span').should('be.visible').click();
        cy.contains('Casino').should('be.visible').click();
    });

    it('should display sub menu with categories after tapping Casino.', () =>{
        
        cy.contains('Popular').should('be.visible');
        //cy.contains('New').should('be.visible');
        cy.contains('Slots').should('be.visible');
        cy.contains('Jackpots').should('be.visible');
        cy.contains('Buy Feature').should('be.visible');
        cy.contains('Hot Slots').should('be.visible');
        cy.contains('Table Games').should('be.visible');
        cy.contains('Drops & Wins').scrollIntoView().should('be.visible');
        cy.contains('Cash Drop').should('be.visible');
        cy.contains('Arcade').should('be.visible'); 
        cy.contains('Cluster Games').should('be.visible');
        cy.contains('Latest Provider').should('be.visible');
        cy.contains('Exclusives').should('be.visible');
    });

    it('should redirect to Popular page if tap on Popular.',() => {
        cy.contains('Popular').click();
        cy.url().should('include', '/popular-games');
    });

    it('should redirect to New page if tap on New.',() => {
        cy.contains('New').click();
        cy.url().should('include', '/new-games');
    });

    it('should redirect to Slots page if tap on Slots.',() => {
        cy.contains('Slots').click();
        cy.url().should('include', '/slots');
    })

    it('should redirect to Jackpots page if tap on Jackpots.',() => {
        cy.contains('Jackpots').click();
        cy.url().should('include', '/jackpot-games');
    });

    it('should redirect to Buy Feature page if tap on Buy Features.',() => {
        cy.contains('Buy Feature').click();
        cy.url().should('include', '/buy-feature');
    });

    it('should redirect to Hot Slots page if tap on Hot Slots.',() => {
        cy.contains('Hot Slots').click();
        cy.url().should('include', '/hot-slots');
    });

    it('should redirect to Table games page if tap on Table games',() => {
        cy.contains('Table Games').click();
        cy.url().should('include', '/table-games'); // redirect to casino games page
    });

    it('should redirect to Drops & Wins page if tap on Drops & Wins.',() => {
        cy.contains('Drops & Wins').click();
        cy.url().should('include', '/drops-and-wins');
    });

    it('should redirect to Cash Drop page if tap on Cash Drop',() => {
        cy.contains('Cash Drop').click();
        cy.url().should('include', '/cash-drop');
    });

    it('should redirect to Arcade page if tap on Arcade',() => {
        cy.contains('Arcade').click();
        cy.url().should('include', '/arcade-games');
    });

    it('should redirect to Cluster Games page if tap on Cluster Games.',() => {
        cy.contains('Cluster Games').click();
        cy.url().should('include', '/cluster-games');
    });

    it('should redirect to Latest Provider page if tap on Latest Provider.',() => {
        cy.contains('Latest Provider').click();
        cy.url().should('include', '/latest-provider');
    });

    it('should redirect to Exclusivies page if tap on Exclusives', () => {
        cy.contains('Exclusives').click();
        cy.url().should('include', '/exclusives');
    });
})