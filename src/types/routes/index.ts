export type RouteType = {
	id: string;
	path: string;
	isPrivate: boolean;
	component: React.FC;
	label: string;
	isNavbar: boolean;
	allowedRoles: Array<string>;
	routes: Array<RouteType>;
};
