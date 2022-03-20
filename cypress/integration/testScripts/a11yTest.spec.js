// Define at the top of the spec file or just import it
function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
  
    cy.task('table', violationData)
  }
  
  

/// <reference types='cypress' />

describe('Ally Test', () => {
    it('URL Test', () => {
        cy.visit('https://books.toscrape.com/')
        cy.injectAxe()
        cy.log('Axe core is injected.....')
        // cy.checkA11y()
        cy.checkA11y('.side_categories')

    })
})