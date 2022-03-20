/// <reference types='cypress' />

describe('Finding diff WebElements', () => {
    it('Launch App', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').clear();
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Test');
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').clear();
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('User');
        cy.get('.col-md-8 > .form-control').click();
        cy.get('#eid > .form-control').clear();
        cy.get('#eid > .form-control').type('xya@gmail.com');
        cy.get(':nth-child(4) > .col-md-4 > .form-control').clear();
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type('767687687676');
        cy.get('.col-md-4 > :nth-child(2) > .ng-pristine').check();
        cy.get(':nth-child(6) > .col-md-4 > :nth-child(1)').click();
        cy.get('#checkbox2').check();
        cy.get('#Skills').select('Configuration');
        cy.get('.select2-selection').click();
        cy.get('#select2-country-container').click();
        cy.get('#submitbtn').click();
        /* ==== End Cypress Studio ==== */
    })
})

