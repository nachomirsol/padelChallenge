/** Libraries */
import { Link } from 'react-router-dom';
/** Constants */
import { ROUTES } from 'models/routes';
/** Styles */
import './styles/header.scss';

export const Header = () => {
	return (
		<div className='header'>
			<div className='header__content'>
				<h1>
					<Link to={'/'}>Playtomic</Link>
				</h1>
				{ROUTES.filter((route) => route.isNavbar === true).map(
					({ label, path }) => {
						return (
							<span>
								<Link to={path}>{label}</Link>
							</span>
						);
					}
				)}
			</div>
		</div>
	);
};
