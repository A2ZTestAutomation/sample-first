// <reference types='cypress' />

describe('Mouse Actions', () => {
    it('Mouse Right click', () => {
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.contains('right click me').rightclick()
        cy.get('.context-menu-icon-copy').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('clicked: copy')
        })
    })
    it('Mouse dbl click', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.contains('Copy Text').dblclick()
    })
    it.only('Mouse Hover', () => {
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(3) > .dropdown-toggle')
            .invoke('show')
            .should('be.visible')
            .trigger('mouseover')
        
        cy.get('ul.nav li:nth-child(3) > div')
            .invoke('show')
            .should('be.visible')
        cy.get('ul.nav li:nth-child(3) > div ul li:nth-child(2)').click()
    })
})