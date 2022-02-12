/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Searchbar } from '..';

describe('Searchbar component', () => {
	const props = {
		type: 'text',
		name: 'name',
		value: '',
		onChange: jest.fn(),
	};

	it('Should render component with provided props', () => {
		render(<Searchbar {...props} />);

		const input = screen.getByRole('searchbar');

		expect(input).toBeInTheDocument();
	});

	it('Should call onChange on type input', () => {
		render(<Searchbar {...props} />);
		const input = screen.getByRole('searchbar');
		const textToType = 'myName';

		user.type(input, textToType);

		expect(props.onChange).toHaveBeenCalled();
		expect(props.onChange).toHaveBeenCalledTimes(textToType.length);
	});
});
