describe('Testing the API on the hotels pageand return API data', () => {
  it('Visits the app', () => {
    cy.request({
      url: 'https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=4.897070&lat=52.377956&kinds=other_hotels&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d',
      method: 'GET'
    })
    .then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('features');
      cy.log(JSON.stringify(response.body));
    });
  });
});