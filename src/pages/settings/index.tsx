/** Components */
import { AddIcon } from 'assets/icons/add';
import { TodoListItems } from 'components/todoListItems';
import { Modal } from 'components/modal';
import { Input } from 'components/input';
/** Hooks */
import { useTodos } from './hooks/useTodos';
/** Styles */
import './styles/settings.scss';

export const Settings = () => {
	const {
		loading,
		todos,
		isModalOpen,
		setIsModalOpen,
		updateItem,
		deleteItem,
	} = useTodos();

	return (
		<div className='settings'>
			<div className='settings__header'>
				<div className='settings__header-title'>TODO LIST</div>
				<div
					className='settings__header-actions'
					onClick={() => setIsModalOpen(true)}
				>
					<AddIcon />
				</div>
			</div>
			<div className='settings__content'>
				<div className='settings__content-items'>
					<TodoListItems
						loading={loading}
						todos={todos}
						updateItem={updateItem}
						deleteItem={deleteItem}
					/>
				</div>
			</div>
			{isModalOpen && (
				<Modal
					isOpen={isModalOpen}
					modalTitle={'Add Item'}
					setModalIsOpen={setIsModalOpen}
					confirmationButtonText={'Save'}
					cancelButtonText={'Close'}
					handleCancelAction={() => setIsModalOpen(false)}
				>
					<Input
						type='text'
						placeholder={'Type item to add...'}
						width={'50%'}
						height={'40px'}
						name={'search'}
						onChange={() => ({})}
						value={'asas'}
					/>
				</Modal>
			)}
		</div>
	);
};
