/// <reference types='cypress' />

describe('Finding diff WebElements', () => {
    beforeEach('Launch App', () => {
        cy.visit('http://localhost:4200/')
    })
    it('Types of locators', () => {
        //  cy.visit('https://www.akveo.com/ngx-admin/')
        // cy.visit('http://localhost:4200/')
        // cy.visit('https://www.akveo.com/ngx-admin/pages/dashboard')
        // cy.get(':nth-child(2) > nb-card-body > .theme-preview').click()
        // cy.contains('Forms').click()
        // cy.contains('Form Layouts').click()
        // cy.get('[data-name="menu-2"]').click()
        // cy.wait(2000)
        
        // cy.get('input')
        // cy.get('#inputEmail1')
        // cy.get('.input-full-width')
        // cy.get('[placeholder="Email"]')
        // cy.get('[class="input-full-width size-medium shape-rectangle"]')
        // cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        // cy.get('#inputEmail3')
        //     .parents('form')
        //     .find('button')
        //     .parents('form')
        //     .find('nb-checkbox')
        //     .click()

        // cy.contains('nb-card', 'Horizontal form').find('[type="email"]').type('TestUSer')
        // cy.contains('nb-card', 'Horizontal form').find('[type="password"]').type('TestUSer')


        //Method 1
        // const horiForm = cy.contains('nb-card', 'Horizontal form')
        // horiForm.find('[for="inputEmail3"]').should('contain', 'Email')
        
        //Method 2
        // cy.contains('nb-card', 'Horizontal form').then(horiForm => {
        //     const horiFormEmaillbl = horiForm.find('[for="inputEmail3"]').text()
        //     const horiFormPwdlbl = horiForm.find('[for="inputPassword3"]').text()
        //     expect(horiFormEmaillbl).to.equal('Email')
        // })

        //Method 3
        // cy.get('[for="exampleInputEmail1"]').then(basicEmail => {

        //     expect(basicEmail.text()).to.equal('Email address')
        // })

        //Method 4
        // cy.get('[for="exampleInputEmail1"]').invoke('text').then(text =>{
        //     expect(text).to.equal('Email address')
        // })

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioBtns => {
            //converting jQuery into cypress
            cy.wrap(radioBtns)
                // .first()
                .eq(1)
                .check({force:true})
                .should('be.checked')

                cy.wrap(radioBtns)
                // .last()
                .eq(2)
                .check({force:true})
                .should('be.checked')

        })

    })
    it('Handle Listbox', () => {
        //Method1
       cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')
    
        //Method2
        cy.get('nav nb-select').then(dropdown => {

            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim()
                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain',itemText )
                if(index < 3){
                    cy.wrap(dropdown).click()
                }
            })
        })
    })

    it('Accessing WebTables', () => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('tbody').contains('tr', 'John').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear()
            cy.wrap(tableRow).find('[placeholder="Age"]').type('30 {enter}')
            // cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', 30)


        })


    })
    it.only('Handling tooltips', () => {
           cy.contains('Modal & Overlays').click()
            cy.contains('Tooltip').click()
            cy.get('[data-name="menu-2"]').click()
            cy.contains('nb-card', 'Colored Tooltips')
                .contains('Default').click()
            cy.get('nb-tooltip').should('contain', 'This is a tooltip')

    })
})