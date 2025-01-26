// ***********************************************************
// This example support/e2e.js is processed and
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
import './commands';

import 'cypress-file-upload';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("c(...).setup is not a function")) {
      // Return false to prevent Cypress from failing the test
      return false;
    }
    // Let other errors fail the test
    throw err;
  });
  
// Alternatively you can use CommonJS syntax:
// require('./commands')