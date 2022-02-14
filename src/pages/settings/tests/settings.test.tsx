/** Libraries */
import { screen } from '@testing-library/react';

import { renderWithRedux } from 'utils/tests';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { Settings } from '..';

describe('Settings Page Component', () => {
	it('Should render component with provided props', () => {
		renderWithRedux(<Settings />);

		const settings = screen.getByText(/TODO LIST/i);

		expect(settings).toBeInTheDocument();
	});
});
