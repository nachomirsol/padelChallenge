/** Libraries */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Loading } from '../';

describe('Loading component', () => {
	it('Should render component with provided props', () => {
		render(<Loading />);

		const input = screen.getByRole('loading');

		expect(input).toBeInTheDocument();
	});
});
