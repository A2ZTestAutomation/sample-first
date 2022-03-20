/// <reference types='cypress' />

describe('Basic Auth', () => {
    it('Passing cred with URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
    })

    // Basic YWRtaW46YWRtaW4=
    it.only('Passing cred with URL', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers : {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode : false
        })

        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
    })

})
