describe('Login test', () => {
	it('Can open the app', () => {
		cy.visit('https://defiant-twig.surge.sh/');
	});

	it('Can enter an email', () => {
		const emailInput = cy.get('input[type=text]');

		emailInput
			.type('nachoplaytomic@gmail.com')
			.should('have.value', 'nachoplaytomic@gmail.com');
	});

	it('Can enter a password', () => {
		const passwordInput = cy.get('input[type=password]');

		passwordInput.type('nacho123').should('have.value', 'nacho123');
	});

	it('Can login and it redirects you to the Dashboard', () => {
		const loginButton = cy.get('.login .login__form .button');

		loginButton.click();

		cy.location('pathname').should('eq', '/dashboard');
	});
});
