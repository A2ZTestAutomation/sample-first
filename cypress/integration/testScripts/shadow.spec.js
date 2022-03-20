/// <reference types='cypress' />

describe('First URL Sample', () => {
    it('URL Test', () => {
        cy.visit('https://radogado.github.io/shadow-dom-demo/')
        // cy.get('#container')
        cy.get('#app').shadow().find('#container')

        cy.get('#app').shadow().find('#container').then( (label) => {
            const strValue = label.text()
            cy.log('Using Shadow ....' + strValue)
        } )
        cy.get('#app').shadow().find('#container').invoke('text').as('txtVal')
        cy.get('@txtVal').then( (str) => {
            cy.log('Using Shadow ....' + str)
        })

    })
    it('Simple Alert', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
                 return false
        })

        
        cy.window().then(function($win){
            cy.stub($win, 'prompt').returns('Hello Welcome')
            cy.contains('Click for JS Prompt').click()
        })
    })

    it('Handling new Tab', () => {
        cy.visit('http://the-internet.herokuapp.com/windows')
        cy.get('.example > a')
            .invoke('removeAttr', 'target')
            .click()
        cy.url().should('include', 'new')
    })
    it('Handling new Window', () => {
        cy.visit('https://stqatools.com/demo/Windows.php')
        cy.contains('Click to open new Window')
            .invoke('removeAttr', 'target')
            .click()
        cy.get('a.navbar-brand').should('contain', 'Demo Test')
    })
    it('Handling iFrame', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function (myframe){
            const frame = myframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('Hello Welcome')
        })
    })
    it.only('Handling iFrame - plugin', () => {
            cy.visit('http://the-internet.herokuapp.com/iframe')
           cy.frameLoaded('#mce_0_ifr')
           cy.iframe().clear().type('Using iFrame cypress plugin')

    })

})