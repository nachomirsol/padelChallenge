export type RouteType = {
	id: string;
	path: string;
	isPrivate: boolean;
	component: any;
	label: string;
	isNavbar: boolean;
	allowedRoles: Array<string>;
	routes: Array<RouteType>;
};
