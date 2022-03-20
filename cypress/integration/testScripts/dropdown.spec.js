/// <reference types='cypress' />

describe('Finding diff WebElements', () => {
    before('Launch App', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
    })

    it.skip('Selecting from dropdown', () => {
        cy.get('#msdd').click()
        cy.get('a').contains('Arabic').click()
        cy.get('a').contains('Croatian').click()
    })
    it('Single dropdown', () => {
        cy.get('#Skills').select('Android', {force:true}).should('have.value', 'Andr')
    })

    it('Select from dynamic dropdown', () => {
        cy.get('span[role="combobox"]').click()
        cy.get('.select2-search__field').type('Hong {enter}')
        cy.get('span[role="combobox"]').should('have.text', 'Hong Kong')
    })
})
