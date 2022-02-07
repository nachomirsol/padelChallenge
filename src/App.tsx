/** Libraries */
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
/** Redux */
import { store } from 'store/store';
/** Routes */
import { AppRoutes } from './routes';

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
};
