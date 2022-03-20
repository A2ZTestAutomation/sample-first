/// <reference types='cypress' />

describe('Trello Request', () => {
    
        
    it('Create a new Board', () => {
        cy.visit('http://localhost:3000')
        cy.request({
            method: 'POST',
            url:'/api/boards',
            body:{
                'name':'Created Board from API - second'
            }
        })
    })
    //88325062916

    it.only('Update existing board', () => {
        cy.visit('http://localhost:3000')
        cy.request({
            method: 'PATCH',
            url:'/api/boards/88325062916',
            body:{
                'name':'Created Board from API - Updated Second'
            }
        })
    })
    it.only('Update existing board', () => {
        cy.visit('http://localhost:3000')
        cy.request({
            method: 'DELETE',
            url:'/api/boards/88325062916'
           
        })
    })
})