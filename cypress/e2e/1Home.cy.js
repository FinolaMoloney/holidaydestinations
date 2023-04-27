describe('Testing and loading the home page', () => {
  it('Visits the app', () => {
    cy.visit('http://localhost:3000')
cy.log('This test has sucessfully loaded the PWA app.');
  })
})