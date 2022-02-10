/** Libraries */
import { render, screen, fireEvent } from '@testing-library/react';

import { renderWithRedux } from 'utils/tests';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Dashboard } from '..';

describe('Dashboard Page Component', () => {
	it('Should render component with provided props', () => {
		renderWithRedux(<Dashboard />);

		const dashboard = screen.getByRole('button');

		expect(dashboard).toBeInTheDocument();
	});
});
