import { ButtonProps } from './types';
/** Styles */
import './styles/button.scss';

export const Button = ({
	label = 'Filter',
	width = '100%',
	height = '100%',
	onClick,
}: ButtonProps) => {
	return (
		<button className='button' style={{ width, height }} onClick={onClick}>
			{label}
		</button>
	);
};
