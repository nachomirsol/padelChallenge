Cypress.Commands.add('login', () => {
	cy.visit('http://localhost:8080/login');
	cy.get('input[type=text]').type('nachoplaytomic@gmail.com');
	cy.get('input[type=password]').type('nacho123');
	cy.get('.login .login__form .button').click();
	cy.location('pathname').should('eq', '/dashboard');
});
