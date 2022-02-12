/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Card } from '..';

describe('Card component', () => {
	const props = {
		id: '1',
		title: 'test title',
		description: 'test description',
		likes: 2,
		imgUrl: 'anyUrl',
		onClick: jest.fn(),
	};

	it('Should render component with provided props', () => {
		render(<Card {...props} />);

		const card = screen.getByRole('card');

		expect(card).toBeInTheDocument();
	});

	it('Should render card info based on props', () => {
		render(<Card {...props} />);

		const card = screen.getByRole('card');

		expect(card).toHaveTextContent('test title');
	});

	it('Should use image src based on props', () => {
		render(<Card {...props} />);
		const cardImage = screen.getByAltText(props.description);

		expect(cardImage).toHaveAttribute('src', props.imgUrl);
	});

	it('Should trigger onClick function', () => {
		render(<Card {...props} />);
		const likeIcon = screen.getByRole('like');
		user.click(likeIcon);

		expect(props.onClick).toHaveBeenCalled();
	});
});
