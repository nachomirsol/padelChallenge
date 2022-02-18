describe('/settings', () => {
	const TOTAL_ITEMS = 20;
	beforeEach(() => {
		cy.login();
		cy.visit('https://defiant-twig.surge.sh/settings');
		cy.wait(3000);
	});

	it('can find a list of 20 list items', () => {
		cy.get('.item').should('have.length', TOTAL_ITEMS);
	});

	it('deletes 1 item from the current list', () => {
		const deleteItemButton = cy.get('.item__actions span').eq(1);
		deleteItemButton.click();
		cy.get('.item').should('have.length', TOTAL_ITEMS - 1);
	});

	it('Should appear modal on click add button', () => {
		const addItemButton = cy.get('.settings__header-actions');
		addItemButton.click();
		cy.get('.modal__header').should('have.text', 'Add Item');
	});

	it('Should add 1 item to the current list', () => {
		const addItemButton = cy.get('.settings__header-actions');
		addItemButton.click();
		cy.get('input[type=text]').type('new item');
		const saveButton = cy.get('.modal__buttons .button').eq(1);
		saveButton.click();
		cy.get('.item').should('have.length', TOTAL_ITEMS + 1);
	});
});
