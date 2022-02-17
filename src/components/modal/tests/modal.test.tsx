/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { Modal } from '..';

describe('Input component', () => {
	let props = {
		isOpen: true,
		setModalIsOpen: jest.fn(),
		modalTitle: 'modal title header',
	};

	it('Should render component with provided props', async () => {
		render(
			<Modal {...props}>
				<div>Modal body</div>
			</Modal>
		);

		const modalContent = screen.queryByText('Modal body');

		expect(modalContent).toBeTruthy();
	});

	it('Should render component with header title', async () => {
		render(
			<Modal {...props}>
				<div>Modal body</div>
			</Modal>
		);

		const modalContent = screen.queryByText('modal title header');

		expect(modalContent).toBeTruthy();
	});

	it('Should not render modal if isOpen is set to false', async () => {
		props.isOpen = false;
		render(
			<Modal {...props}>
				<div>Modal body</div>
			</Modal>
		);

		const modalContent = screen.queryByText('Modal body');

		expect(modalContent).not.toBeTruthy();
	});
});
