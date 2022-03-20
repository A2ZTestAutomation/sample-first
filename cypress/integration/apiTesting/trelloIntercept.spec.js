/// <reference types='cypress' />

describe('Trello Request', () => {
    const baseUrl = 'http://localhost:3000'
    // it('Accessing at network layer', () => {
    //   cy.intercept({
    //     method:'GET',
    //     url:'/api/boards'
    //   }).as('boards')
    //   cy.visit('/')
      
    // })
    it.only('Accessing at network layer', () => {
        cy.intercept({
          method:'GET',
          url:'/api/boards'
        }).as('boards')
        cy.visit('/')
        cy.wait('@boards')
          .its('response.statusCode')
          .should('eq', 200)
      cy.get('[data-cy="board-item"]').should('have.length', 12)
     
       })
       it('Return empty list', () => {
        cy.intercept({
          method:'GET',
          url:'/api/boards'
        },{
          body: []
        }).as('boards')
       cy.visit('/')
      })
      it('Return from fisture list', () => {
        cy.intercept({
          method:'GET',
          url:'/api/boards'
        },{
          fixture: 'boards'
        }).as('boards')
       cy.visit('/')
      })
    
})
