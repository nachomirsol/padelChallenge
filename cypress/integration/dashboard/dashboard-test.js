describe('/dashboard', () => {
	const TOTAL_ITEMS = 30;
	beforeEach(() => {
		cy.login();

		cy.wait(2000);
	});

	it('can find a list of 30 images', () => {
		cy.get('.card').should('have.length', TOTAL_ITEMS);
	});

	it('Duplicates the list of 30 images if click in load more', () => {
		const loadMoreButton = cy.get('.list__loadMore');
		loadMoreButton.click();
		cy.wait(3000);
		cy.get('.card').should('have.length', TOTAL_ITEMS * 2);
	});
});
