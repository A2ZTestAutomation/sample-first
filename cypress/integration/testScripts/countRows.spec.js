// <reference types='cypress' />

describe('Table Navigation', () => {

    it('Total Record Count', () => {
        let count =0
        cy.visit('https://demo.seleniumeasy.com/table-pagination-demo.html')
        function gotoNextPage(){
          cy.get('tbody tr:visible').should('have.length.gt', 0)
            .its('length').then((n) => {
                count += n
            })
            cy.get('li a.next_link')
                .invoke('attr', 'style')
                .then((display) => {
                    cy.log(display)
                    if(display == 'display: none;'){
                        cy.log(`Done ${count} rows.....`)
                        expect(count).to.be.equals(13)
                    }
                    else{
                        cy.wait(1000)
                        cy.get('li a.next_link').click().then(gotoNextPage)
                    }
            })
        }
        gotoNextPage()
    })
})