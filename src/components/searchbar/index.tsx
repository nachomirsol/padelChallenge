/** Types */
import { SearchbarTypes } from './types';
/** Styles */
import './styles/searchbar.scss';

export const Searchbar = ({
	width = '100%',
	height = '100%',
	type = 'text',
	name = 'name',
	placeholder = 'placeholder',
	value = '',
	onChange,
}: SearchbarTypes) => {
	return (
		<label role='searchbar' className='searchbar' style={{ width, height }}>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};
