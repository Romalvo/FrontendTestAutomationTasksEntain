describe('Hamburger Menu navigation on mobile',() => {
    beforeEach(() => {
        cy.viewport('iphone-x');

        cy.visit('https://boostcasino.com')
    });

    it('should display the hamburger menu and its entries', () =>{
        cy.get('label > span > span').should('be.visible').click();
        cy.contains('Home').should('be.visible');
        cy.contains('Casino').should('be.visible');
        cy.contains('Live Casino').should('be.visible');
        cy.contains('Promotions').should('be.visible');
        cy.contains('Customer Support').should('be.visible');

        cy.contains('Customer Support').click();

        cy.url().should('include', '/customer-support');
    })
})