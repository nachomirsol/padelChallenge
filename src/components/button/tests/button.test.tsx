/** Libraries */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Button } from '..';

describe('Input component', () => {
	const props = {
		height: '60px',
		label: 'text',
		onClick: jest.fn(),
	};

	it('Should render component with provided props', () => {
		render(<Button {...props} />);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
	});

	it('Should call onClick on click button', () => {
		render(<Button {...props} />);
		const button = screen.getByRole('button');

		expect(props.onClick).not.toHaveBeenCalled();

		user.click(button);

		expect(props.onClick).toHaveBeenCalled();
	});

	it('Should apply height style', () => {
		render(<Button {...props} />);
		const button = screen.getByRole('button');

		expect(button).toHaveStyle(`height:${props.height}`);
	});
});
