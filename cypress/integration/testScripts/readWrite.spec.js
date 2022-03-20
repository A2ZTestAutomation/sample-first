/// <reference types='cypress' />

describe('Read and Write into file', () => {
    it('Write into .json file', () => {
        cy.writeFile('empData.json', {name:"John", email: "test@gmail.com", age: "40"}, {flag: 'a+'})
        
    })
    it('write into .txt file', () => {
        cy.writeFile('sample.txt', 'Hello Welcome to Cypress Workshop')
    })

    it('Read and validate .json file', () => {
        cy.readFile('empData.json').its('email').should('eq', 'test@gmail.com')
    })
    it('Read and validate .txt file', () => {
        cy.readFile('sample.txt').should('eq', 'Hello Welcome to Cypress Workshop')
    })
    it('Verifying Page Headers', () => {
        cy.visit('https://demo.opencart.com/')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

        })

    it.only('File Upload ', () => {
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sample.txt')
        cy.get('#file-submit').click()
    })
})
