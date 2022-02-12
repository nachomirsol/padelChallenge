describe('/dashboard', () => {
	beforeEach(() => {
		cy.login();

		cy.wait(2000);
	});
	

	it('can find a list of 30 images', () => {
		cy.get('.dashboard .dashboard__content .card').each((item, index, list) => {
			expect(list).to.have.length(30);
		});
	});


	it('Duplicates the list of 30 images if click in load more', () => {
		const loadMoreButton = cy.get('.dashboard .dashboard__loadMore');
		loadMoreButton.click();
		cy.wait(2000);
		cy.get('.dashboard .dashboard__content .card').each((item, index, list) => {
			expect(list).to.have.length(60);
		});
	});
});
