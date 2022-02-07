/** Types */
import { InputTypes } from './types';
/** Styles */
import './styles/input.scss';

export const Input = ({
	width = '100%',
	height = '100%',
	type = 'text',
	name = 'name',
	placeholder = 'placeholder',
	value = '',
	onChange,
}: InputTypes) => {
	return (
		<input
			role='inputText'
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			style={{ width, height }}
		/>
	);
};
