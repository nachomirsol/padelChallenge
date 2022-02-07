/** Types */
import { SearchbarTypes } from './types';
/** Styles */
import './styles/searchbar.scss';

export const Searchbar = ({
	width = '100%',
	type = 'text',
	name = 'name',
	placeholder = 'placeholder',
	value = '',
	onChange,
}: SearchbarTypes) => {
	return (
		<label role='searchbar' className='searchbar' style={{ width: width }}>
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
