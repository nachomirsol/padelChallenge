/** Components */
import { TodoListItems } from 'components/todoListItems';
/** Hooks */
import { useTodos } from './hooks/useTodos';
/** Styles */
import './styles/settings.scss';

export const Settings = () => {
	const { loading, todos, updateItem, deleteItem } = useTodos();

	return (
		<div className='settings'>
			<div className='settings__title'>TODO LIST</div>
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
		</div>
	);
};
