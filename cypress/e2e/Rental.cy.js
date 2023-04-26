

// Define the API endpoint and headers
const apiUrl = 'https://booking-com.p.rapidapi.com/v1/car-rental/search?currency=EUR&drop_off_latitude=48.864716&sort_by=recommended&drop_off_datetime=2023-06-30%2016%3A00%3A00&from_country=it&pick_up_latitude=48.864716&locale=en-gb&pick_up_datetime=2023-06-29%2016%3A00%3A00&drop_off_longitude=2.349014&pick_up_longitude=14.421133';
const apiHeaders = {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '321085c8cfmshd05a007d314f786p1b98fdjsn953e416d1d90',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
};

// Cypress test
describe('API Test', () => {
    it('should return a valid response', () => {
        // Send the HTTP GET request with headers
        cy.request({
            method: 'GET',
            url: apiUrl,
            headers: apiHeaders
        }).then((response) => {
            // Assert response status code
            expect(response.status).to.eq(200);
cy.log('This test has sucessfully reached the car rental API.');
            
        });
    });
});
