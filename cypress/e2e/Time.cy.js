describe('Page loading time', () => {
  it('Theis test measures th eload tie of a web page', () => {
    // Set the page URL to load
    const pageUrl = 'http://localhost:3000/Rental';
    
    // Start measuring time
    cy.clock();
    
    // Load the page and wait for it to be fully loaded
    cy.visit(pageUrl);
    cy.get('body').should('be.visible');

    // Stop measuring time and log the elapsed time
    cy.clock().then(clock => {
      const pageLoadTime = clock.now - clock.createdAt;
      cy.log(`Page loaded in ${pageLoadTime}ms`);
    });
  });
});
