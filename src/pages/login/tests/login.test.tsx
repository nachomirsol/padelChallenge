/** Libraries */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRedux } from 'utils/tests';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { Login } from '..';

describe('Login Page Component', () => {
	it('Should render component with provided props', () => {
		renderWithRedux(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const login = screen.getByRole('login');

		expect(login).toBeInTheDocument();
	});
});
