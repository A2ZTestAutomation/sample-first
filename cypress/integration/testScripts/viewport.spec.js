// <reference types='cypress' />

describe('View Port test', () => {

    it('SEtting resolution', () => {
        cy.viewport(1280, 720)
        cy.visit('http://example.com/')
        cy.wait(2000)
    })
    it('SEtting resolution', () => {
        cy.viewport(1980, 1080)
        cy.visit('http://example.com/')
        cy.wait(2000)
    })

    it('SEtting resolution in ipad', () => {
        cy.viewport("iphone-x")
        cy.visit('http://example.com/')
        cy.wait(2000)
    })
    it('SEtting resolution in macbook', () => {
        cy.viewport("macbook-16")
        cy.visit('http://example.com/')
        cy.wait(2000)
    })

    
})