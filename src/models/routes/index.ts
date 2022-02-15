/** Components - pages */
import { Dashboard } from 'pages/dashboard';
import { Login } from 'pages/login';
import { Settings } from 'pages/settings';
/** Constants */
import { ROUTEPATHS } from 'constants/paths';
/** Types */
import { RouteType } from 'types/routes';

export const ROUTES: RouteType[] = [
	{
		id: '1',
		path: ROUTEPATHS.DASHBOARD,
		isPrivate: true,
		component: Dashboard,
		label: 'Dashboard',
		isNavbar: true,
		allowedRoles: [],
		routes: [],
	},
	{
		id: '2',
		path: ROUTEPATHS.LOGIN,
		isPrivate: false,
		component: Login,
		label: ROUTEPATHS.LOGIN,
		isNavbar: false,
		allowedRoles: [],
		routes: [],
	},
	{
		id: '3',
		path: ROUTEPATHS.SETTINGS,
		isPrivate: true,
		component: Settings,
		label: 'Settings',
		isNavbar: true,
		allowedRoles: [],
		routes: [],
	},
];
