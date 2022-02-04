/** Libraries */
import { Routes, Route } from 'react-router-dom';
/** Components */
import { Header } from 'components/header';
/** Models */
import { ROUTES } from 'models/routes';
import { RouteType } from 'types/routes';

export const AppRoutes = () => {
	return (
		<Routes>
			{ROUTES.map((route: RouteType) => {
				const Component = route.component;
				return (
					<Route
						key={route.id}
						path={route.path}
						element={
							<>
								<Header />
								<Component />
							</>
						}
					/>
				);
			})}
		</Routes>
	);
};
