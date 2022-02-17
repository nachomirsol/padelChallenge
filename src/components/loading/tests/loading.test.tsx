/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { Loading } from '../';

describe('Loading component', () => {
	it('Should render component with provided props', () => {
		render(<Loading />);

		const loading = screen.getByRole('loading');

		expect(loading).toBeInTheDocument();
	});
});
