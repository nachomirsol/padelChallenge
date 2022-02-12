/** Libraries */
import { Routes, Route, Navigate } from 'react-router-dom';
/** Components */
import { Header } from 'components/header';
import { Login } from 'pages/login';
/** Models */
import { ROUTES } from 'models/routes';
import { RouteType } from 'types/routes';
import { RequireAuth } from './RequiredAuthRoute';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			{ROUTES.filter((route) => route.isPrivate).map((route: RouteType) => {
				const Component = route.component;
				return (
					<Route
						key={route.id}
						path={route.path}
						element={
							<>
								<Header />
								<RequireAuth>
									<Component />
								</RequireAuth>
							</>
						}
					/>
				);
			})}

			<Route path='*' element={<Navigate to='/dashboard' />} />
		</Routes>
	);
};
