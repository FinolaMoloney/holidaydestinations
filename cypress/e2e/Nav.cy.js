describe('Testing the navbar is visible', () => {
  it('should be visible', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').should('be.visible')
  })
})
