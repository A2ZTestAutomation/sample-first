// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe'

Cypress.Commands.add('login', (username, password) => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.radius').click()
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if(options && options.sensitive){
        options.log = false
        Cypress.log({
            $el: element,
            name: 'type',
            message:'*'.repeat(text.length),
        })
    }
    return originalFn(element, text, options)
})

Cypress.Commands.add('LoginIntoApp', (username, pwd) => {
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign in').click()
    cy.get("input[placeholder = 'Email']").type('corpdevops@gmail.com')
    cy.get("input[placeholder = 'Password']").type('conduit123')
    cy.get("button[type='submit']").click()
})