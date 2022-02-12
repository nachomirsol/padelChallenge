/** Libraries */
import { act, render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Header } from '..';

describe('Header component', () => {
	it('Should render component', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);

		const header = screen.getByRole('header');

		expect(header).toBeInTheDocument();
	});

	it('Should render settings link and redirect to it ', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		const headerLink = screen.getByText(/settings/i);

		expect(headerLink).toBeInTheDocument();

		user.click(headerLink);

		expect(document.location.pathname).toBe('/settings');
	});

	it('Should render with active class on click link ', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		const settingsLink = screen.getByText(/settings/i);

		user.click(settingsLink);

		expect(settingsLink.closest('span')).toHaveAttribute('class', 'active');

		const dashboardLink = screen.getByText(/dashboard/i);

		expect(dashboardLink.closest('span')).not.toHaveAttribute('class', 'active');
	});
});
