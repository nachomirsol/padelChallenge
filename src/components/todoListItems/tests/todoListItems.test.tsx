/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { TodoListItems } from '../';

describe('TodoListItems component', () => {
	let props = {
		loading: false,
		todos: [
			{ id: 1, userId: 1, title: 'test 1', completed: false },
			{ id: 2, userId: 2, title: 'test 2', completed: true },
		],
		updateItem: jest.fn(),
		deleteItem: jest.fn(),
	};

	it('Should render component with provided props', () => {
		render(<TodoListItems {...props} />);

		const item = screen.getByText(/test 1/i);

		expect(item).toBeInTheDocument();
	});

	it('Should find all items of the list', () => {
		render(<TodoListItems {...props} />);

		const items = screen.getAllByRole('list-item');

		expect(items.length).toBe(props.todos.length);
	});

	it('Should trigger function on click delete', () => {
		render(<TodoListItems {...props} />);

		const deleteItemButton = screen.getAllByRole('delete')[0];

		user.click(deleteItemButton);

		expect(props.deleteItem).toHaveBeenCalled();
	});

	it('Should render loading element', () => {
		props.loading = true;
		render(<TodoListItems {...props} />);

		const item = screen.queryByText(/test 1/i);

		expect(item).not.toBeInTheDocument();
		expect(screen.getByRole('loading')).toBeInTheDocument();
	});

	it('Should render NoData Element', () => {
		props.todos = [];
		props.loading = false;
		render(<TodoListItems {...props} />);

		const noData = screen.getByRole('noData');

		expect(noData).toBeInTheDocument();
	});
});
