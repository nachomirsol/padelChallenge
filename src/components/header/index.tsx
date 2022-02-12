/** Libraries */
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
/** Constants */
import { ROUTES } from 'models/routes';
/** Utils */
import { checkLocalStorage } from 'utils/localStorage';
/** Types */
import { RouteType } from 'types/routes';
/** Assets */
import { UserIcon } from 'assets/icons/user';

/** Styles */
import './styles/header.scss';

export const Header = () => {
	// const email = jwt_decode(checkLocalStorage())?.email || '';
	const email = 'fakeEmail';
	const currentLocation = useLocation();
	return (
		<div className='header' role='header'>
			<div className='header__content'>
				<h1>
					<Link to={'/'}>Playtomic</Link>
				</h1>
				<div className='header__content-links'>
					{ROUTES.filter((route: RouteType) => route.isNavbar === true).map(
						({ id, label, path }) => {
							return (
								<span
									key={id}
									className={`${
										currentLocation.pathname === path ? 'active' : ''
									}`}
								>
									<Link to={path}>{label}</Link>
								</span>
							);
						}
					)}

					<div className='userInfo'>
						<span>
							<UserIcon />
						</span>
						<span>{email}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
