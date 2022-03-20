/// <reference types='cypress' />

describe('First URL Sample', {
     "retries": {
        "runMode":2,
        "openMode":2
    }
},() => {
    before(function() {
        cy.log('Before Starting any Test....')
    })
    beforeEach(function() {
        cy.log('Before Each Test....')
    })
    it('URL Test', () => {
        cy.visit('https://books.toscrape.com/')
        cy.contains('Travel').click()
        cy.url().should('include', 'travel')
        console.log('Visited Travel Page')
        cy.get('h1').should('be.visible')
        cy.get('.image_container').its('length').should('eq', 13)
        cy.get('h1').should('be.visible').then(() => {
            console.log('After Test Execution')    
        })
        // console.log('After Test Execution')
    })
    after(function() {
        cy.log('After All Test ......')
    })
    afterEach(function() {
        cy.log('After Each Test....')
    })
})
