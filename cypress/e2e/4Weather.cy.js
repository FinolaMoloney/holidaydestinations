describe('Testing the OpenWeatherMap API', () => {
  it('Should return the weather information of Paris', () => {
    cy.request('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=2fce26b3009e0a66de8c0a0223800869')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Paris');
        expect(response.body.main.temp).to.be.a('number');
        cy.log(JSON.stringify(response.body));
      });
  });
});
