/// <reference types='cypress' />

describe('Fixture sample', () => {
    it('Login with hardcoded', () => {
        cy.visit('https://www.example.com/')
        cy.screenshot({capture:'fullPage'})
    })
    it('Screenshot', () => {
        cy.visit('https://www.example.com/')
        cy.get('h1').screenshot()
        
    })
    it.only('Scroll', () => {
        cy.visit('https://demo.opencart.com/')
        //Using cypress-xpath
        cy.xpath('//input[@name="search"]').type('phone {enter}')
        // cy.get('input.form-control.input-lg').type('phone {enter}')
        cy.get('.product-thumb').scrollIntoView()
        cy.get('.product-thumb').screenshot()
             
    })

})