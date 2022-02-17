/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { NoData } from '../';

const NO_DATA_LABEL_PROP = 'test';
describe('NoData component', () => {
	it('Should render component with provided props', () => {
		render(<NoData label={NO_DATA_LABEL_PROP} />);

		const noData = screen.getByRole('noData');

		expect(noData).toBeInTheDocument();
	});

	it('Should render component with provided props', () => {
		render(<NoData label={NO_DATA_LABEL_PROP} />);

		const noData = screen.getByRole('noData');

		expect(noData).toHaveTextContent(NO_DATA_LABEL_PROP);
	});
});
