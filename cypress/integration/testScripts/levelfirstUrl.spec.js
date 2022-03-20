/// <reference types='cypress' />

describe('First URL Sample', () => {
    it('URL Test', () => {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include', 'books')
        // cy.contains('Travel').click()
        cy.get('a').contains('Travel').click()
        cy.log('Navigated to Travel Page....')

    })
    it('Verifying element', () => {
        cy.visit('http://example.com/')
        cy.get('h2').should('be.visible')

    })
})