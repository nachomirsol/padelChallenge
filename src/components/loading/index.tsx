/** Styles */
import './styles/loading.scss';

export const Loading: React.FC = () => {
	return (
		<div className='loading' role='loading'>
			<div className='spin' />
		</div>
	);
};
