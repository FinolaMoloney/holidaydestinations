describe('Count Bootstrap Cards', () => {
  it('should count the number of Bootstrap cards on the page', () => {
    cy.visit('http://localhost:3000/flights');

    // Get all Bootstrap cards on the page
    cy.get('.card').should('exist').then(($cards) => {
      // Check that there are at least two cards on the page
      expect($cards).to.have.length.at.least(2);

      // Log the number of cards on the page
      const numCards = $cards.length;
      cy.log(`There are ${numCards} Bootstrap cards on the page`);
    });
  });
});
