it('Testing all the pages work', () => {

  cy.visit('http://localhost:3000')

  // Hotels page
  cy.contains('Hotels').click()
  cy.location('pathname').should('eq', '/hotels')
  cy.go('back')
  
    // Rentals page
  cy.contains('Rentals').click()
  cy.location('pathname').should('eq', '/Rental')
  cy.go('back')
  
    // Weather page
  cy.contains('Weather').click()
  cy.location('pathname').should('eq', '/Weather')
  cy.go('back')
  
  // Flights page
  cy.contains('Flights').click()
  cy.location('pathname').should('eq', '/flights')
  cy.go('back')
  
    // Flights page
  cy.contains('Contact Us').click()
  cy.location('pathname').should('eq', '/contact')
  cy.go('back')





});