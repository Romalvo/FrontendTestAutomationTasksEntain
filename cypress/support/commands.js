import viewports from "../fixtures/viewports";

Cypress.Commands.add('setDesktopViewport', () => {
    cy.viewport(viewports.desktop.width, viewports.desktop.height);
});

Cypress.Commands.add('setMobileViewport', () => {
    cy.viewport(viewports.mobile.width, viewports.mobile.height);
});

Cypress.Commands.add('setTabletViewport', () => {
    cy.viewport(viewports.tablet.width, viewports.tablet.height);
});