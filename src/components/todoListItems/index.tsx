/** Components */
import { Loading } from 'components/loading';
import { NoData } from 'components/noData';
/** Assets */
import { DeleteIcon } from 'assets/icons/delete';
/** Types */
import { TodoListItemTypes, TodoListTypes } from './types';
/** Styles */
import './styles/todoListItem.scss';

export const TodoListItems = ({
	loading,
	todos,
	updateItem,
	deleteItem,
}: TodoListTypes) => {
	if (loading) {
		return <Loading />;
	}
	if (todos.length === 0) {
		return <NoData label={'No data Found'} />;
	}

	return (
		<>
			{todos.map(({ id, title, completed }: TodoListItemTypes) => {
				return (
					<div className='item' key={id}>
						<div className='item__content'>
							<div className={`item__content-title ${completed && 'marked'}`}>
								{id}- {title}
							</div>
							<div className='round'>
								<input
									type='checkbox'
									checked={completed}
									onChange={() => updateItem(id)}
								/>
								<label
									htmlFor='checkbox'
									onClick={() => updateItem(id)}
								></label>
							</div>
						</div>

						<div className='item__actions'>
							<span onClick={() => deleteItem(id)}>
								<DeleteIcon />
							</span>
						</div>
					</div>
				);
			})}
		</>
	);
};
