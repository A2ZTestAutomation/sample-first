/// <reference types='cypress' />

describe('Fixture sample', () => {
    it('Login with hardcoded', () => {
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.get('#username').type('tomsmith')
        // cy.get('#password').type('SuperSecretPasswor')
        cy.get('#password').type('SuperSecretPasswo', {sensitive:true}, {delay:10})
        cy.get('.radius').click()
        // cy.login('tomsmith', 'SuperSecretPasswor')
    })
    it('Login using custom command', () => {
        cy.visit('http://the-internet.herokuapp.com/login')

        cy.fixture('user').then( (user) => {
            const uname = user.username
            const pwd = user.password
            // cy.get('#username').type(uname)
            // cy.get('#password').type(pwd)
            cy.login(uname, pwd)
            
        })
              
    })
    it.skip('Login with env ', () => {
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.clearCookies()
        cy.clearLocalStorage()
        Cypress.e
        cy.get('#username').type(Cypress.env('username'))
        //  cy.get('#password').type('SuperSecretPassword!')
        cy.get('#password').type(Cypress.env('password'), {sensitive:true}, {delay:10})
        cy.get('.radius').click()
        // cy.login('tomsmith', 'SuperSecretPasswor')
    })
})

