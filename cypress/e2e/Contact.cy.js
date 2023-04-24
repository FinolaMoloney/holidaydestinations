describe('Testing the functionality of the contact form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact'); 
  });

  it('test submitting a form with all fields correct', () => {
    cy.get('input[name="name"]').type('Tom');
    cy.get('input[name="lastName"]').type('Kelly');
    cy.get('input[name="email"]').type('tom.kelly@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('Thanks for getting in touch Tom, we will get back to you on tom.kelly@example.com shortly!');
  });

  it('test omitting the first name', () => {
    cy.get('input[name="lastName"]').type('Kelly');
    cy.get('input[name="email"]').type('tom.kelly@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('First Name is required');
  });

  it('test omitting the last name', () => {
    cy.get('input[name="name"]').type('Tom');
    cy.get('input[name="email"]').type('tom.kelly@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('Last Name is required');
  });

  it('test omitting the email field', () => {
    cy.get('input[name="name"]').type('Tom');
    cy.get('input[name="lastName"]').type('Kelly');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is required');
  });

  it('test for an invalid email', () => {
    cy.get('input[name="name"]').type('Tom');
    cy.get('input[name="lastName"]').type('Kelly');
    cy.get('input[name="email"]').type('invalid email');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('A valid email is required');
  });

  it('test omitting the message field', () => {
    cy.get('input[name="name"]').type('Tom');
    cy.get('input[name="lastName"]').type('Kelly');
    cy.get('input[name="email"]').type('tom.kelly@example.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Enter your message before submitting');
  });
});
