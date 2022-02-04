/** Libraries */
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<>
			<Link to='/login'>login</Link>
			<Link to='/'>dashboard</Link>
			<Link to='/settings'>settings</Link>
		</>
	);
};
