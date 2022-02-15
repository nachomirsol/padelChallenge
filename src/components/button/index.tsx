import { ButtonProps } from './types';
/** Styles */
import './styles/button.scss';

export const Button = ({
	label = 'Filter',
	width = '100%',
	height = '100%',
	disabled = false,
	onClick,
}: ButtonProps) => {
	return (
		<button
			role='button'
			className={`button ${disabled ? 'disabled' : ''}`}
			style={{ width, height }}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};
