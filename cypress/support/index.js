// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-axe'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

import addContext from 'mochawesome/addContext'
Cypress.on('test:after:run', (test, runnable) => {
    // if (test.state == 'failed') {
    //     cy.log(Cypress.config('screenshotsfolder'))
    //     const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/
    //     ${runnable.parent.title} -- ${test.title} (failed).png`
    //     addContext({test}, screenshot)
    // }

    if (test.state === 'failed') {
        let item = runnable
        const strParts = [runnable.title]
    
        // Iterate through all parents and grab the titles
        while (item.parent) {
          strParts.unshift(item.parent.title)
          item = item.parent
        }
    
        const fullTestName = strParts
                .filter(Boolean)
                .join(' -- ')           // this is how cypress joins the test title fragments
    
        const imageUrl = `${Cypress.config('screenshotsFolder')}/${
          Cypress.spec.name
        }/${fullTestName} (failed).png`
    
        addContext({ test }, imageUrl)
      }
    })

