/** Libraries */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Input } from '..';

describe('Input component', () => {
	const props = {
		type: 'text',
		name: 'name',
		value: '',
		onChange: jest.fn(),
	};

	it('Should render component with provided props', () => {
		render(<Input {...props} />);

		const input = screen.getByRole('inputText');

		expect(input).toBeInTheDocument();
	});

	it('Should call onChange on type input', () => {
		render(<Input {...props} />);
		const input = screen.getByRole('inputText');
		const textToType = 'myName';

		user.type(input, textToType);

		expect(props.onChange).toHaveBeenCalled();
		expect(props.onChange).toHaveBeenCalledTimes(textToType.length);
	});
});
