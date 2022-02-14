/** Libraries */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { PhotoListItems } from '../';

describe('PhotoListItems component', () => {
	let props = {
		loading: false,
		photos: [
			{
				id: 1,
				user: { first_name: 'user 1' },
				description: 'photo 1',
				urls: { regular: 'url 1' },
			},
			{
				id: 2,
				user: { first_name: 'user 2' },
				description: 'photo 2',
				urls: { regular: 'url 2' },
			},
		],
		loadMore: jest.fn(),
	};

	it('Should render component with provided props', () => {
		render(<PhotoListItems {...props} />);

		const item = screen.getByText(/user 1/i);

		expect(item).toBeInTheDocument();
	});

	it('Should find all items of the list', () => {
		render(<PhotoListItems {...props} />);

		const items = screen.getAllByRole('card');

		expect(items.length).toBe(props.photos.length);
	});

	it('Should render loading element', () => {
		props.loading = true;
		render(<PhotoListItems {...props} />);

		const item = screen.queryByText(/test 1/i);

		expect(item).not.toBeInTheDocument();
		expect(screen.getByRole('loading')).toBeInTheDocument();
	});

	it('Should render NoData Element', () => {
		props.photos = [];
		props.loading = false;
		render(<PhotoListItems {...props} />);

		const noData = screen.getByRole('noData');

		expect(noData).toBeInTheDocument();
	});
});
