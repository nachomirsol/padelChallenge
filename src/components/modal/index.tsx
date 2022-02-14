import { useEffect } from 'react';
/** Libraries */
import { createPortal } from 'react-dom';
import { DeleteIcon } from 'assets/icons/delete';
/** Components */
import { Button } from 'components/button';
/** Types */
import { ModalTypes } from './types';
/** Styles */
import './styles/modal.scss';

let modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

export const Modal = ({
	isOpen,
	setModalIsOpen,
	modalTitle,
	confirmationButtonText,
	cancelButtonText,
	children,
	handleConfirmAction,
	handleCancelAction,
	hasCloseIcon = true,
}: ModalTypes) => {
	return (
		isOpen &&
		createPortal(
			<div className='modal__container'>
				<div className='modal'>
					<div className='modal__header'>
						<span>{modalTitle}</span>
						{hasCloseIcon && (
							<span
								onClick={() => {
									handleCancelAction && handleCancelAction();
									setModalIsOpen(false);
								}}
							>
								<DeleteIcon />
							</span>
						)}
					</div>
					<div className='modal__body'>{children}</div>
					{(confirmationButtonText || cancelButtonText) && (
						<div className='modal__buttons'>
							{cancelButtonText && (
								<Button
									width={'100px'}
									height={'40px'}
									label={cancelButtonText}
									onClick={() => {
										handleCancelAction && handleCancelAction();
										setModalIsOpen(false);
									}}
								/>
							)}
							{confirmationButtonText && (
								<Button
									width={'100px'}
									height={'40px'}
									label={confirmationButtonText}
									onClick={() => {
										handleConfirmAction && handleConfirmAction();
										setModalIsOpen(false);
									}}
								/>
							)}
						</div>
					)}
				</div>
			</div>,
			modalRoot
		)
	);
};
